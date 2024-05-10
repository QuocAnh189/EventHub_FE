//hook
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

// components
import { PageHeader } from '@layouts/components'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import InfomationEvent from '@components/event/InfomationEventCreate'
import BannerEvent from '@components/event/BannerEventCreate'
import TicketEventCreate from '@components/event/TicketEventCreate'
import ReviewEventCreate from '@components/event/ReviewEventCreate'

//type
import { ICreateEventPayload, InitCreateEventPayload } from '@type/event'

// icons
import { IoCreate } from 'react-icons/io5'
import { BiImport } from 'react-icons/bi'

//file
import readXlsxFile from 'read-excel-file'

//redux
import { useCreateEventMutation, useUpdateEventMutation } from '@redux/services/eventApi'
import { IEvent } from 'interfaces/contents/event'
import { toast } from 'react-toastify'
import { useAppSelector } from '@hooks/useRedux'

//constant
import { stepCreateEvent } from '@constants/event'

interface Props {
  title: string
  create?: boolean
  event?: IEvent
}
const ModifyEvent = (props: Props) => {
  const { title, create, event } = props

  const user = useAppSelector((state) => state.user.user)

  const [createEvent, { isLoading: loadingCreateEvent }] = useCreateEventMutation()
  const [updateEvent, { isLoading: loadingUpdateEvent }] = useUpdateEventMutation()

  const [active, setActive] = useState<number>(create ? -1 : 0)

  const { control, register, handleSubmit, watch, setValue, reset } = useForm<ICreateEventPayload>({
    defaultValues: event
      ? { ...event, creatorId: user?.id, eventSubImages: event.subImages }
      : { ...InitCreateEventPayload, creatorId: user?.id },
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<ICreateEventPayload> = async (data: ICreateEventPayload | any) => {
    const formData: any = new FormData()

    for (let key in data) {
      if (key === 'ticketTypes' || key === 'categoryIds' || key === 'eventSubImages' || key === 'reasons') {
        if (key === 'ticketTypes') {
          data[key].forEach((item: any) => formData.append(key, JSON.stringify(item)))
        } else {
          data[key].forEach((item: any) => formData.append(key, item))
        }
      } else {
        formData.append(key, data[key])
      }
    }

    try {
      const result = create
        ? await createEvent(formData).unwrap()
        : await updateEvent({ eventId: data.id!, data: formData }).unwrap()
      console.log(result)
      if (result) {
        toast.success(`${create ? 'Create' : 'Update'} event successfully`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleFileImport = (e: any) => {
    e.preventDefault()
    readXlsxFile(e.target.files[0]).then((rows: any) => {
      setValue('name', rows[5][0].toString())
      setValue('categoryIds', JSON.parse(rows[5][1].toString()))
      setValue('eventCycleType', rows[5][2].toString())
      setValue('startTime', rows[5][3].toString())
      setValue('endTime', rows[5][4].toString())
      setValue('location', rows[5][5].toString())
      setValue('description', rows[5][6].toString())
      setValue('reasons', JSON.parse(rows[5][7].toString()))
      setValue('eventSubImages', JSON.parse(rows[5][8].toString()))
      setValue('eventPaymentType', rows[5][9].toString())
      setValue('ticketTypes', JSON.parse(rows[5][10].toString()))
    })
    setActive(0)
  }

  const handleDownloadFile = () => {
    const link = document.createElement('a')
    link.href = '/excel/example-event-import.xlsx'
    link.setAttribute('download', 'example-event-import.xlsx')
    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
    URL.revokeObjectURL('/excel/example-event-import.xlsx')
  }

  if (active === -1 && create) {
    return (
      <div className='min-h-screen'>
        <PageHeader title={title} />
        <div className='w-full flex mt-40 justify-center gap-12'>
          <button
            onClick={() => {
              setActive(0)
              reset()
            }}
            className='w-[300px] h-[200px] border-[2px] border-solid border-textGray rounded-lg flex flex-col items-center justify-center gap-2 hover:cursor-pointer'
          >
            <IoCreate size={42} color='var(--header)' />
            <p className={`font-bold text-textGray`}>Create Event</p>
            <p className='text-center px-4 text-header'>You will have to create the event one way handmade</p>
          </button>
          <div className='z-[9] relative w-[300px] h-[200px] border-[2px] border-solid border-textGray rounded-lg flex flex-col items-center justify-center gap-2 hover:cursor-pointer'>
            <input
              className='h-full w-full opacity-0 z-[1] hover:cursor-pointer'
              type='file'
              accept='.xlsx, .xls'
              onChange={(e) => handleFileImport(e)}
            />
            <div className='absolute z-[0] h-full w-full rounded-lg flex flex-col items-center justify-center gap-2'>
              <BiImport size={42} color='var(--header)' />
              <p className='font-bold text-textGray text-justify'>Import Event</p>
              <p className='text-center text-header z-[10]'>Do you already have an event?</p>
            </div>
            <button onClick={handleDownloadFile} className='text-primary hover:underline z-[2] pt-2'>
              Example file here
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen'>
      <PageHeader title={title} />
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={active} alternativeLabel>
          {stepCreateEvent.map((label: string, index: number) => (
            <Step key={`step-${index}`}>
              <StepLabel>
                <p className='text-header'>{label}</p>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        {active === 0 && (
          <InfomationEvent
            register={register}
            setValue={setValue}
            watch={watch}
            control={control}
            setActive={(value) => {
              setActive(value)
            }}
            create={create!}
          />
        )}

        {active === 1 && (
          <BannerEvent
            coverImage={watch().coverImage}
            subImage={watch().eventSubImages}
            setValue={setValue}
            setActive={(value) => {
              setActive(value)
            }}
          />
        )}

        {active === 2 && (
          <TicketEventCreate
            register={register}
            eventTicketType={watch().eventPaymentType}
            control={control}
            setValue={setValue}
            setActive={(value) => {
              setActive(value)
            }}
          />
        )}

        {active === 3 && (
          <ReviewEventCreate
            watch={watch}
            setValue={setValue}
            setActive={(value) => {
              setActive(value)
            }}
            disabled={create ? loadingCreateEvent : loadingUpdateEvent}
            create={create!}
          />
        )}
      </form>
    </div>
  )
}

export default ModifyEvent

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

//util
import dayjs from 'dayjs'

//redux
import { useCreateEventMutation, useUpdateEventMutation } from '@redux/services/eventApi'

interface Props {
  title: string
  create?: boolean
}
const ModifyEvent = (props: Props) => {
  const { title, create } = props

  const steps = ['Infomation', 'Banner Image', 'Set Ticket', 'Review']

  const [createEvent, { isLoading: loadingCreateEvent }] = useCreateEventMutation()
  const [updateEvent, { isLoading: loadingUpdateEvent }] = useUpdateEventMutation()

  const [active, setActive] = useState<number>(create ? -1 : 0)

  const { control, register, handleSubmit, watch, setValue, reset } = useForm<ICreateEventPayload>({
    defaultValues: InitCreateEventPayload,
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<ICreateEventPayload> = async (data) => {
    const formData = {
      ...data,
      startTime: data.startDate + ' ' + data.startTime,
      endTime: data.endDate + ' ' + data.endTime
    }
    delete formData.startDate
    delete formData.endDate

    console.log(formData)

    try {
      const result = create ? await createEvent(formData).unwrap() : await updateEvent(data).unwrap()
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  const handleFileImport = (e: any) => {
    e.preventDefault()
    readXlsxFile(e.target.files[0]).then((rows: any) => {
      setValue('name', rows[1][0].toString())
      setValue('categories', JSON.parse(rows[1][1].toString()))
      setValue('eventType', rows[1][2].toString())
      setValue('startDate', dayjs(rows[1][3].toString()).format('YYYY-MM-DD'))
      setValue('endDate', dayjs(rows[1][4].toString()).format('YYYY-MM-DD'))
      setValue('startTime', dayjs(rows[1][5].toString()).format('hh:mm'))
      setValue('endTime', dayjs(rows[1][6].toString()).format('hh:mm'))
      setValue('location', rows[1][7].toString())
      setValue('description', rows[1][8].toString())
      setValue('reasons', JSON.parse(rows[1][9].toString()))
      setValue('coverImage', rows[1][10].toString())
      setValue('subImage', JSON.parse(rows[1][11].toString()))
      setValue('eventTicketType', rows[1][12].toString())
      setValue('tickets', JSON.parse(rows[1][13].toString()))
    })
    setActive(0)
  }

  const handleDownloadFile = () => {
    const link = document.createElement('a')
    link.href = '/excel/example-event-import.xlsx'
    link.setAttribute('download', 'example-event-import.xlsx') //or any other extension
    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
    URL.revokeObjectURL('/excel/example-event-import.xlsx.xlsx')
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
            className='w-[300px] h-[200px] border-[2px] border-solid border-textGray rounded-lg flex flex-col items-center justify-center gap-2 hover:cursor-pointer hover:bg-slate-200'
          >
            <IoCreate size={42} color='#333' />
            <p className={`font-bold text-textGray`}>Create Event</p>
            <p className='text-center px-4'>You will have to create the event one way handmade</p>
          </button>
          <div className='relative w-[300px] h-[200px] border-[2px] border-solid border-textGray rounded-lg flex flex-col items-center justify-center gap-2 hover:cursor-pointer hover:bg-slate-200'>
            <input
              className='h-full w-full opacity-0 z-[1] hover:cursor-pointer'
              type='file'
              accept='.xlsx, .xls'
              onChange={(e) => handleFileImport(e)}
            />
            <div className='absolute z-[0] h-full w-full rounded-lg flex flex-col items-center justify-center gap-2'>
              <BiImport size={42} color='#333' />
              <p className='font-bold text-textGray text-justify'>Import Event</p>
              <p className='text-center'>Do you already have an event?</p>
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
          {steps.map((label) => (
            <Step key={label}>
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
            subImage={watch().subImage}
            setValue={setValue}
            setActive={(value) => {
              setActive(value)
            }}
          />
        )}

        {active === 2 && (
          <TicketEventCreate
            register={register}
            eventTicketType={watch().eventTicketType}
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
          />
        )}
      </form>
    </div>
  )
}

export default ModifyEvent

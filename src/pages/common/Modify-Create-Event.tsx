/* eslint-disable react-hooks/exhaustive-deps */
//hook
import { useEffect, useState } from 'react'
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
import { URLtoFile } from '@utils/url_to_file'
import { withTranslation } from 'react-i18next'

interface Props {
  t: any
  title: string
  create?: boolean
  event?: IEvent
}
const ModifyEvent = (props: Props) => {
  const { t, title, create, event } = props

  const user = useAppSelector((state) => state.persistedReducer.user.user)

  const [createEvent, { isLoading: loadingCreateEvent }] = useCreateEventMutation()
  const [updateEvent, { isLoading: loadingUpdateEvent }] = useUpdateEventMutation()

  const [active, setActive] = useState<number>(create ? -1 : 0)

  const { control, register, handleSubmit, watch, setValue, reset } = useForm<ICreateEventPayload>({
    defaultValues: event ? { ...event, creatorId: user?.id } : { ...InitCreateEventPayload, creatorId: user?.id },
    mode: 'onChange'
  })

  useEffect(() => {
    if (event) {
      const ConverToFile = async () => {
        try {
          const fileCoverImage = event.coverImage ? await URLtoFile(event?.coverImage) : ''
          const fileSubImageOne = event?.subImages[0] ? await URLtoFile(event?.subImages[0]) : ''
          const fileSubImageTwo = event?.subImages[1] ? await URLtoFile(event?.subImages[1]) : ''
          const fileSubImageThree = event?.subImages[2] ? await URLtoFile(event?.subImages[2]) : ''
          const fileSubImageFour = event?.subImages[3] ? await URLtoFile(event?.subImages[3]) : ''

          setValue('coverImage', fileCoverImage)
          setValue('eventSubImages', [fileSubImageOne, fileSubImageTwo, fileSubImageThree, fileSubImageFour])
        } catch (e) {
          console.log(e)
        }
      }
      ConverToFile()
    }
  }, [event])

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
      setValue('name', rows[6][0].toString())
      setValue('categoryIds', JSON.parse(rows[3][1].toString()))
      setValue('eventCycleType', rows[6][2].toString())
      setValue('startTime', rows[6][3].toString())
      setValue('endTime', rows[6][4].toString())
      setValue('location', rows[6][5].toString())
      setValue('description', rows[6][6].toString())
      setValue('reasons', JSON.parse(rows[6][7].toString()))
      setValue('eventSubImages', JSON.parse(rows[6][8].toString()))
      setValue('eventPaymentType', rows[6][9].toString())
      setValue('ticketTypes', JSON.parse(rows[6][10].toString()))
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
            <p className={`font-bold text-textGray`}>{t('option_one.title')}</p>
            <p className='text-center px-4 text-header'>{t('option_one.description')}</p>
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
              <p className='font-bold text-textGray text-justify'>{t('option_two.title')}</p>
              <p className='text-center text-header z-[10]'>{t('option_two.description')}</p>
            </div>
            <button onClick={handleDownloadFile} className='text-primary hover:underline z-[2] pt-2'>
              {t('option_two.example_file')}
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

export default withTranslation('create_event')(ModifyEvent)

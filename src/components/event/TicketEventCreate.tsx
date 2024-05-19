//hook
import { Control, useFieldArray, UseFormRegister, UseFormSetValue } from 'react-hook-form'

//constant
import { EEventPaymentTicket } from '@constants/enum'

//component
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

//icon
import { IoTicketOutline } from 'react-icons/io5'
import { IoPricetagOutline } from 'react-icons/io5'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { CiCircleRemove } from 'react-icons/ci'
import freeImg from '@assets/common/free.png'

//type
import { ICreateEventPayload, InitCreateTicketPayload } from '@type/event'
import { withTranslation } from 'react-i18next'

interface Props {
  t: any
  register: UseFormRegister<ICreateEventPayload>
  eventTicketType: EEventPaymentTicket
  setValue: UseFormSetValue<ICreateEventPayload>
  control: Control<ICreateEventPayload, any>
  setActive: (value: number) => void
}

const TicketEventCreate = (props: Props) => {
  const { t, setActive, control, register, eventTicketType, setValue } = props

  const {
    fields: tickets,
    append,
    remove
  } = useFieldArray({
    control,
    name: 'ticketTypes'
  })

  const handleNextStep = () => {
    setActive(3)
  }

  return (
    <div className='relative pt-10 pb-20 px-40 space-y-10 min-h-screen'>
      <div className='space-y-4'>
        <p className='text-xl font-bold tracking-wider text-header'>{t('ticket.title')}</p>
        <div className='flex items-center gap-8'>
          <div
            onClick={() => setValue('eventPaymentType', EEventPaymentTicket.PAID)}
            className={`border-[2px] border-solid ${
              eventTicketType === EEventPaymentTicket.PAID ? 'border-primary' : 'border-textGray'
            } rounded-lg py-4 px-12 flex flex-col items-center justify-center hover:cursor-pointer`}
          >
            <IoTicketOutline size={42} color={eventTicketType === EEventPaymentTicket.PAID ? '#3D56F0' : '#333'} />
            <p className={`font-bold  text-${eventTicketType === EEventPaymentTicket.PAID ? 'primary' : 'textGray'}`}>
              {t('ticket.option_one.label')}
            </p>
            <p className='text-header'>{t('ticket.option_one.description')}</p>
          </div>
          <div
            onClick={() => setValue('eventPaymentType', EEventPaymentTicket.FREE)}
            className={`border-[2px] border-solid ${
              eventTicketType === EEventPaymentTicket.FREE ? 'border-primary' : 'border-textGray'
            } rounded-lg py-4 px-12 flex flex-col items-center justify-center hover:cursor-pointer`}
          >
            <img loading='lazy' src={freeImg} alt='' className='w-[42px]' />
            <p className={`font-bold text-${eventTicketType === EEventPaymentTicket.FREE ? 'primary' : 'textGray'}`}>
              {t('ticket.option_two.label')}
            </p>
            <p className='text-header'>{t('ticket.option_two.description')}</p>
          </div>
        </div>
      </div>
      {eventTicketType === EEventPaymentTicket.PAID && (
        <div className='space-y-4'>
          <div className='flex items-center gap-2'>
            <p className='text-xl font-bold tracking-wider text-header'>{t('ticket.ticket_title')}</p>
            <IoMdAddCircleOutline
              size={30}
              className='hover:cursor-pointer text-header'
              onClick={() => {
                append(InitCreateTicketPayload)
              }}
            />
          </div>
          {tickets.map((ticket, index) => (
            <div className='flex items-center gap-8' key={ticket.id}>
              <FormControl>
                <FormLabel
                  sx={{
                    fontWeight: 'bold',
                    mb: '4px'
                  }}
                >
                  <p className='text-header'>{t('ticket.ticket_name')}</p>
                </FormLabel>
                <div className='text-header'>
                  <TextField
                    {...register(`ticketTypes.${index}.name`)}
                    sx={{
                      width: '300px',
                      '& label': { color: 'var(--header)' },
                      '& .MuiOutlinedInput-input': {
                        color: 'var(--header)'
                      },
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'var(--header)'
                        },
                        '&:hover fieldset': {
                          borderColor: 'var(--header)'
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'var(--header)'
                        }
                      }
                    }}
                    id='outlined-basic'
                    label='Enter the name of the ticket'
                    size='small'
                  />
                </div>
              </FormControl>
              <FormControl>
                <FormLabel sx={{ fontWeight: 'bold', mb: '4px' }}>
                  <p className='text-header'>{t('ticket.ticket_quantity')}</p>
                </FormLabel>
                <TextField
                  type='number'
                  {...register(`ticketTypes.${index}.quantity`)}
                  sx={{
                    width: '300px',
                    '& .MuiOutlinedInput-input': {
                      color: 'var(--header)'
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'var(--header)'
                      },
                      '&:hover fieldset': {
                        borderColor: 'var(--header)'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'var(--header)'
                      }
                    }
                  }}
                  id='outlined-basic'
                  size='small'
                />
              </FormControl>
              <FormControl>
                <FormLabel sx={{ fontWeight: 'bold', mb: '4px' }}>
                  <p className='text-header'>{t('ticket.ticket_price')}</p>
                </FormLabel>
                <TextField
                  type='number'
                  {...register(`ticketTypes.${index}.price`)}
                  defaultValue='0.00'
                  sx={{
                    width: '250px',
                    '& .MuiOutlinedInput-input': {
                      color: 'var(--header)'
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'var(--header)'
                      },
                      '&:hover fieldset': {
                        borderColor: 'var(--header)'
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'var(--header)'
                      }
                    }
                  }}
                  size='small'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <IoPricetagOutline color='var(--header)' />
                      </InputAdornment>
                    )
                  }}
                />
              </FormControl>
              <button>
                <CiCircleRemove color='var(--header)' size={32} onClick={() => remove(index)} />
              </button>
            </div>
          ))}
        </div>
      )}
      <div className='absolute flex items-center gap-4 right-8'>
        <button
          className='btn bg-textGray hover:text-white'
          onClick={() => {
            setActive(1)
          }}
        >
          {t('button_back')}
        </button>
        <button className=' btn btn--primary ' onClick={handleNextStep}>
          {t('button_continue')}
        </button>
      </div>
    </div>
  )
}

export default withTranslation('create_event')(TicketEventCreate)

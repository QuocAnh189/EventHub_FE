//hook
import { Control, useFieldArray, UseFormRegister, UseFormSetValue } from 'react-hook-form'

//component
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

//icon
import { IoTicketOutline } from 'react-icons/io5'
import { IoPricetagOutline } from 'react-icons/io5'
import freeImg from '@assets/common/free.png'
import { IoMdAddCircleOutline } from 'react-icons/io'

//type
import { ICreateEventPayload, InitCreateTicketPayload } from '@type/event'
import { GrSubtractCircle } from 'react-icons/gr'
import { EEventTicket } from '@constants/enum'

interface Props {
  register: UseFormRegister<ICreateEventPayload>
  eventTicketType: EEventTicket
  setValue: UseFormSetValue<ICreateEventPayload>
  control: Control<ICreateEventPayload, any>
  setActive: (value: number) => void
}

const TicketEventCreate = (props: Props) => {
  const { setActive, control, register, eventTicketType, setValue } = props

  const {
    fields: tickets,
    append,
    remove
  } = useFieldArray({
    control,
    name: 'tickets'
  })

  const handleNextStep = () => {
    setActive(3)
  }

  return (
    <div className='relative pt-10 pb-20 px-40 space-y-10 min-h-screen'>
      <div className='space-y-4'>
        <p className='text-xl font-bold tracking-wider'>What type of event are you running ?</p>
        <div className='flex items-center gap-8'>
          <div
            onClick={() => setValue('eventTicketType', EEventTicket.FEE)}
            className={`border-[2px] border-solid ${
              eventTicketType === EEventTicket.FEE ? 'border-primary' : 'border-textGray'
            } rounded-lg py-4 px-12 flex flex-col items-center justify-center hover:cursor-pointer`}
          >
            <IoTicketOutline size={42} color={eventTicketType === EEventTicket.FEE ? '#3D56F0' : '#333'} />
            <p className={`font-bold text-${eventTicketType === EEventTicket.FEE ? 'primary' : 'textGray'}`}>
              Fee Event
            </p>
            <p>My event require tickets for entry</p>
          </div>
          <div
            onClick={() => setValue('eventTicketType', EEventTicket.FREE)}
            className={`border-[2px] border-solid ${
              eventTicketType === EEventTicket.FREE ? 'border-primary' : 'border-textGray'
            } rounded-lg py-4 px-12 flex flex-col items-center justify-center hover:cursor-pointer`}
          >
            <img loading='lazy' src={freeImg} alt='' className='w-[42px]' />
            <p className={`font-bold text-${eventTicketType === EEventTicket.FREE ? 'primary' : 'textGray'}`}>
              Free Event
            </p>
            <p>I'm running free event</p>
          </div>
        </div>
      </div>
      {eventTicketType === EEventTicket.FEE && (
        <div className='space-y-4'>
          <div className='flex items-center gap-2'>
            <p className='text-xl font-bold tracking-wider'>What ticket are you selling ?</p>
            <IoMdAddCircleOutline
              size={30}
              className='hover:cursor-pointer'
              onClick={() => {
                append(InitCreateTicketPayload)
              }}
            />
          </div>
          {tickets.map((ticket, index) => (
            <div className='flex items-center gap-8' key={ticket.id}>
              <FormControl>
                <FormLabel sx={{ fontWeight: 'bold', mb: '4px' }}>Ticket Name</FormLabel>
                <TextField
                  {...register(`tickets.${index}.name`)}
                  sx={{ width: '300px' }}
                  id='outlined-basic'
                  label='Enter the name of the ticket'
                  size='small'
                />
              </FormControl>
              <FormControl>
                <FormLabel sx={{ fontWeight: 'bold', mb: '4px' }}>Ticket Quantity</FormLabel>
                <TextField
                  {...register(`tickets.${index}.quantity`)}
                  sx={{ width: '300px' }}
                  id='outlined-basic'
                  size='small'
                />
              </FormControl>
              <FormControl>
                <FormLabel sx={{ fontWeight: 'bold', mb: '4px' }}>Ticket Price</FormLabel>
                <TextField
                  {...register(`tickets.${index}.price`)}
                  defaultValue='0.00'
                  sx={{ width: '250px' }}
                  size='small'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <IoPricetagOutline />
                      </InputAdornment>
                    )
                  }}
                />
              </FormControl>
              <button>
                <GrSubtractCircle size={32} onClick={() => remove(index)} />
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
          Go back
        </button>
        <button className=' btn btn--primary ' onClick={handleNextStep}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default TicketEventCreate

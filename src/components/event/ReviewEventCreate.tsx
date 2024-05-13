//hook
import { UseFormSetValue, UseFormWatch } from 'react-hook-form'

//component
import Switch from 'react-switch'

//icons
import { IoLocationOutline } from 'react-icons/io5'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { IoMdTime, IoMdAdd } from 'react-icons/io'
import { IoTicketOutline } from 'react-icons/io5'

//type
import { ICreateEventPayload } from '@type/event'

//assets
import eventDefault from '@assets/event/event-poster.png'

//day
import dayjs from 'dayjs'

//map
import { CircularProgress } from '@mui/material'
import LocationEvent from '@components/Location'

interface Props {
  watch: UseFormWatch<ICreateEventPayload>
  setValue: UseFormSetValue<ICreateEventPayload>
  setActive: (value: number) => void
  disabled: boolean
  create: boolean
}
const ReviewEventCreate = (props: Props) => {
  const { setActive, watch, setValue, disabled, create } = props

  return (
    <div className='w-full px-40 mt-10'>
      <div className='flex flex-col gap-6 border-[3px] border-textGray rounded-2xl p-10'>
        <div className='h-[500px]'>
          <img
            src={watch().coverImage ? URL.createObjectURL(watch().coverImage) : eventDefault}
            alt=''
            loading='lazy'
            className='w-full h-full object-cover rounded-xl'
          />
        </div>
        <div className='w-full flex items-center justify-between'>
          <h1>{watch().name}</h1>
          <div className='flex items-center gap-2'>
            <p className='text-xl font-bold text-header'>Public:</p>
            <Switch
              onChange={() => {
                setValue('isPrivate', !watch().isPrivate)
              }}
              checked={!watch().isPrivate}
            />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='w-full flex flex-col gap-4'>
            <div className='flex justify-between'>
              <div className='flex flex-col gap-y-3'>
                <h4 className='text-header'>Date and Time</h4>
                <div className='flex items-center gap-1'>
                  <FaRegCalendarAlt color='gray' size='24px' />

                  <p className='text-header'>{dayjs(watch().startTime).format('dddd, DD MMMM YYYY')?.toString()}</p>
                </div>
                <div className='flex items-center gap-1'>
                  <IoMdTime color='gray' size='24px' />

                  <p className='text-header'>
                    {dayjs(watch().startTime).format('hh:mm A YYYY/MM/DD')?.toString()} -{' '}
                    {dayjs(watch().endTime).format('hh:mm A YYYY/MM/DD')?.toString()}
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-black text-xl font-bold mb-4 text-header'>Ticket Information</h3>
                <div className='flex items-center gap-2'>
                  <IoTicketOutline />
                  <p className='text-header'>Ticket type: {watch().eventPaymentType}/Ticket</p>
                </div>
                {watch().ticketTypes.map((ticket, index) => (
                  <p key={`ticket-${index}`} className='w-full flex justify-between gap-2'>
                    <span className='text-header'>
                      {index + 1}. <span className='font-bold'>{ticket.name}:</span>
                    </span>
                    <span className='text-primary font-bold'>{ticket.price}.000 VND</span>
                  </p>
                ))}
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <h4 className='text-header'>Location</h4>
              <div className='flex gap-1'>
                <IoLocationOutline color='gray' size='24px' />
                <p className='max-w-[500px] text-header'>{watch().location}</p>
              </div>
              {watch().location && <LocationEvent location={watch().location} />}
            </div>
            <div className='flex flex-col gap-8'>
              <div className='space-y-2'>
                <h5>Organization By</h5>
                <div className='flex items-center gap-3'>
                  <img
                    src='https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
                    alt=''
                    className='w-[50px] h-[50px] object-cover rounded-full'
                  />
                  <div>
                    <p className='font-semibold text-header'>Anh Quoc</p>
                    <button className='flex items-center gap-1 bg-primary px-2 py-1 rounded-md'>
                      <IoMdAdd color='white' size={24} />
                      <p className='text-white'>Follow</p>
                    </button>
                  </div>
                </div>
              </div>

              <div className='space-y-1'>
                <h5>Event Description</h5>
                <p className='text-header'>{watch().description}</p>
                <h6>{watch().reasons.length} Reasons to attend the event:</h6>
                {watch().reasons.map((reason, index) => (
                  <p key={`reason-${index}`} className='text-header'>
                    {index + 1}. {reason}.
                  </p>
                ))}
              </div>
            </div>

            <div className='w-full flex items-center gap-8 justify-center'>
              {watch().eventSubImages.map(
                (image: any, index: number) =>
                  image && (
                    <img
                      key={`subimage-${index}`}
                      loading='lazy'
                      className='h-[200px] w-[200px] rounded-lg'
                      src={image ? URL.createObjectURL(image) : ''}
                      alt=''
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex items-center gap-4 justify-end mt-10'>
        <button
          className='btn bg-textGray hover:text-white'
          onClick={() => {
            setActive(2)
          }}
        >
          Go back
        </button>

        <button disabled={disabled} type='submit' className='btn btn--primary w-[200px]'>
          {disabled ? <CircularProgress size={24} /> : create ? 'Create Event' : 'Update Event'}
        </button>
      </div>
    </div>
  )
}

export default ReviewEventCreate

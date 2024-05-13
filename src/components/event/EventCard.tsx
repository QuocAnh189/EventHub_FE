//hook
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//component
import { EventModal } from '../modal/EventModal'
import Modal from '@mui/material/Modal'
import Backdrop from '@mui/material/Backdrop'
import Fade from '@mui/material/Fade'

//icon
import { FaCalendarAlt } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { IEvent } from 'interfaces/contents/event'
import dayjs from 'dayjs'
import { EEventPaymentTicket } from '@constants/enum'

interface ICard {
  event: IEvent
  modal?: boolean
}

const EventCard = (props: ICard) => {
  const { event, modal } = props

  const navigate = useNavigate()
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSelectEvent = () => {
    return modal ? handleOpen() : navigate(`event/${event.id}`)
  }

  return (
    <>
      <div
        className='shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer'
        onClick={handleSelectEvent}
      >
        <div className='overflow-hidden'>
          <img
            loading='lazy'
            src={event?.coverImage}
            alt='No image'
            className='mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110'
          />
        </div>

        <div className='space-y-4 p-3'>
          <div className='min-h-36'>
            <h1 className='line-clamp-1 font-bold text-xl'>{event.name}</h1>
            <div className='flex items-center gap-2 opacity-70'>
              <FaCalendarAlt />
              <span>{dayjs(event.startTime).format('DD/MM/YYYY dddd hh:mm A').toString()}</span>
            </div>
            <div className='flex items-center gap-2 opacity-70'>
              <IoLocationSharp />
              <span>{event.location}</span>
            </div>
            <p className='line-clamp-2 pt-2'>{event.description}</p>
          </div>
          <div className='flex items-center justify-between border-t-2 py-3 !mt-3'>
            <div className='opacity-70'>
              <p>{event.status}</p>
            </div>
            <div className='text-primary'>
              {event.eventPaymentType === EEventPaymentTicket.PAID ? (
                <p className='text-2xl font-bold'>{event.priceRange.startRange}.000 VND</p>
              ) : (
                <p className='text-2xl font-bold'>{event.eventPaymentType}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500
            }
          }}
        >
          <Fade in={open}>
            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[1000px] shadow-md bg-body p-4'>
              <EventModal />
            </div>
          </Fade>
        </Modal>
      )}
    </>
  )
}

export default EventCard

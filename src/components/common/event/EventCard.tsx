//hook
import { useState } from 'react'

//icon
import { FaCalendarAlt } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'

//component
import { EventModal } from '../modal/EventModal'
import Modal from '@mui/material/Modal'
import Backdrop from '@mui/material/Backdrop'
import Fade from '@mui/material/Fade'

const EventCard = ({ img, title, location, time, description, price, type }: any) => {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <div
        className='shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer'
        onClick={handleOpen}
      >
        <div className='overflow-hidden'>
          <img
            src={img}
            alt='No image'
            className='mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110'
          />
        </div>

        <div className='space-y-4 p-3'>
          <div className='min-h-36'>
            <h1 className='line-clamp-1 font-bold text-xl'>{title}</h1>
            <div className='flex items-center gap-2 opacity-70'>
              <FaCalendarAlt />
              <span>{time}</span>
            </div>
            <div className='flex items-center gap-2 opacity-70'>
              <IoLocationSharp />
              <span>{location}</span>
            </div>
            <p className='line-clamp-2 pt-2'>{description}</p>
          </div>
          <div className='flex items-center justify-between border-t-2 py-3 !mt-3'>
            <div className='opacity-70'>
              <p>{type}</p>
            </div>
            <div>
              <p className='text-2xl font-bold'>${price}</p>
            </div>
          </div>
        </div>
      </div>
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
    </>
  )
}

export default EventCard

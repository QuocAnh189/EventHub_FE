//hook
import { useState } from 'react'

//component
import { Link } from 'react-router-dom'
import ConfirmDialog from '@components/Dialog'

//icons
import { HiPencilAlt, HiTrash } from 'react-icons/hi'
import { FaCalendarAlt } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'

const CardMyEvent = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false)

  const handleEdit = () => {}
  const handleDelete = () => {
    setOpenDialog(true)
  }

  return (
    <>
      <div className='flex w-full h-full rounded-lg bg-body shadow-2xl transition-transform hover:scale-[1.005] dark:bg-gray-800 sm:h-40'>
        <div className='relative flex min-w-[320px] items-center justify-between max-md:hidden'>
          <img
            className='w-full h-full rounded-l-lg object-cover'
            src='https://res.cloudinary.com/dadvtny30/image/upload/v1712409123/eventhub/event/w3xvrrue35iu1gncudsa.jpg'
            alt=''
          />
        </div>

        {/* Content */}
        <div className='w-full flex-col justify-between p-5'>
          <div>
            <Link
              className='mb-2 line-clamp-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white max-md:text-base'
              to='/'
            >
              UIT Jobfair
            </Link>
            {/* <p className='mb-3 line-clamp-2 font-normal text-gray-700 dark:text-gray-400 max-md:text-sm'>
              Get ready to kick off the Christmas season in Mumbai with SOUND OF CHRISTMAS - your favourite LIVE
              Christmas concert!.City Youth Movement invites you to the 4th edition of our annual Christmas festivities
              - by the youth and for the youth! Feat. your favourite worship leaders, carols, quizzes and some exciting
              surprises!.Bring your family and friends and sing along your favourite Christmas carols on the 2nd of
              December, 6:30 PM onwards at the Balgandharva Rang Mandir, Bandra West. Book your tickets now!
            </p> */}
            <div className='flex items-center gap-2 opacity-70'>
              <FaCalendarAlt />
              <span>01/04/2003 Wednesday - 02:00 AM</span>
            </div>
            <div className='flex items-center gap-2 opacity-70'>
              <IoLocationSharp />
              <span>UIT - Linh Trung, Thu Duc, HCM City</span>
            </div>
          </div>
          <div className='w-full justify-end flex gap-4 pt-2'>
            <button
              onClick={handleEdit}
              className='flex items-center justify-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Edit
              <HiPencilAlt className='ml-2 h-6 w-6 text-white' />
            </button>

            <button
              onClick={handleDelete}
              className='flex items-center justify-center rounded-lg bg-textError px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
            >
              <span>Delete</span>
              <HiTrash className='ml-1 h-6 w-6 text-white' />
            </button>
          </div>
        </div>
      </div>

      {openDialog && (
        <ConfirmDialog
          title='Delete Event'
          description='Are you sure want to delete this event'
          open={openDialog}
          setOpen={(value) => {
            setOpenDialog(value)
          }}
          action='Delete'
        />
      )}
    </>
  )
}

export default CardMyEvent

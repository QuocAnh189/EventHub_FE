/* eslint-disable react-hooks/exhaustive-deps */
//hook
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

//component
import { Link } from 'react-router-dom'
import ConfirmDialog from '@components/Dialog'
import Checkbox from '@mui/material/Checkbox'

//icons
import { HiPencilAlt, HiTrash } from 'react-icons/hi'
import { FaCalendarAlt } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { IEvent } from 'interfaces/contents/event'

//util
import dayjs from 'dayjs'

import event_Default from '@assets/event/event-poster.png'

interface Props {
  event: IEvent
  checkedAll: boolean
  onChecked: (id: string) => void
}

const CardMyEvent = (props: Props) => {
  const { event, checkedAll, onChecked } = props
  const navigate = useNavigate()
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [select, setSelect] = useState<boolean>(checkedAll)

  useEffect(() => {
    setSelect(checkedAll)
  }, [checkedAll])

  const handleChange = () => {
    setSelect(!select)
    onChecked(event.id)
  }

  const handleEdit = () => {
    navigate(`modify-event/${event.id}`)
  }

  const handleDelete = () => {
    setOpenDialog(true)
  }

  return (
    <>
      <div className='flex w-full h-full rounded-lg bg-body shadow-2xl transition-transform hover:scale-[1.005] dark:bg-gray-800 sm:h-40'>
        <div className='relative flex min-w-[320px] items-center justify-between max-md:hidden'>
          <img
            loading='lazy'
            className='w-full h-full rounded-l-lg object-cover'
            src={event.coverImage ? event.coverImage : event_Default}
            alt=''
          />
        </div>

        {/* Content */}
        <div className='w-full flex-col justify-between p-5'>
          <div>
            <Link
              className='mb-2 line-clamp-1 text-2xl truncate font-bold tracking-tight text-gray-900 dark:text-white max-md:text-base'
              to='/'
            >
              {event.name}
            </Link>
            <div className='flex items-center gap-2 opacity-70'>
              <FaCalendarAlt />
              <span>{dayjs(event.startTime).format('DD/MM/YYYY dddd - h:m A').toString()}</span>
            </div>
            <div className='flex items-center gap-2 opacity-70'>
              <IoLocationSharp />
              <span>{event.locationString}</span>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <Checkbox checked={select} onChange={handleChange} />
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

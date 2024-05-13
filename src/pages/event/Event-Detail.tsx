/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
//hook
import { useState } from 'react'
import { useParams } from 'react-router-dom'

//component
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Infomation from '@components/Infomation'
import ConfirmDialog from '@components/Dialog'
import Comments from '@components/Comments'
import ProtectedLayout from '@layouts/protected'
import LocationEvent from '@components/Location'
import { Loader } from '@components/Loader'
import EventsRelate from './components/EventRelate'

//redux
import Payment from './components/Paymen'

//icons
import { MdStarRate } from 'react-icons/md'
import { IoShareSocialOutline, IoLocationOutline } from 'react-icons/io5'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'
import { useGetEventByIdQuery } from '@redux/services/eventApi'

//util
import dayjs from 'dayjs'

const EventDetail = () => {
  const params = useParams()

  const { data: event, isFetching } = useGetEventByIdQuery(params.id!)

  const [value, setValue] = useState<string>('1')
  const [openDialog, setOpenDialog] = useState<boolean>(false)

  const handleChange = (_event: any, newValue: string) => {
    setValue(newValue)
  }

  if (isFetching) {
    return <Loader />
  }

  return (
    <ProtectedLayout>
      <div className='w-full'>
        <div className='px-[100px] flex flex-col gap-6'>
          <div className='h-[500px]'>
            <img
              src={
                event?.coverImage
                  ? event.coverImage
                  : 'https://res.cloudinary.com/dadvtny30/image/upload/v1712409118/eventhub/event/infflklkudlatzvf8gsz.jpg'
              }
              alt=''
              loading='lazy'
              className='w-full h-full object-cover rounded-xl'
            />
          </div>
          <div className='w-full flex items-center justify-between'>
            <h1>{event?.name}</h1>
            <div className='flex items-center gap-2'>
              <MdStarRate color='gray' size='36px' />
              <IoShareSocialOutline color='gray' size='36px' />
            </div>
          </div>
          <div className='flex justify-between'>
            <div className='w-full flex flex-col gap-4'>
              <div className='flex flex-col gap-y-3'>
                <h4 className='text-header'>Date and Time</h4>
                <div className='flex items-center gap-1'>
                  <FaRegCalendarAlt color='gray' size='24px' />
                  <p className='text-header'>{dayjs(event?.startTime).format('dddd, D MMMM YYYY').toString()}</p>
                </div>
                <div className='flex items-center gap-1'>
                  <IoMdTime color='gray' size='24px' />
                  <p className='text-header'>
                    {dayjs(event?.startTime).format('hh:mm A YYYY/MM/DD')?.toString()} -{' '}
                    {dayjs(event?.endTime).format('hh:mm A YYYY/MM/DD')?.toString()}
                  </p>
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <h4>Location</h4>
                <div className='flex gap-1'>
                  <IoLocationOutline color='gray' size='24px' />
                  <p className='max-w-[500px] text-header'>{event?.location}</p>
                </div>
                <div className='w-4/5'>
                  <LocationEvent location={null} />
                </div>
              </div>
            </div>

            <Payment
              promotion={event?.promotion!}
              ticketTypes={event?.ticketTypes!}
              setOpenDialog={(value: boolean) => {
                setOpenDialog(value)
              }}
            />
          </div>
        </div>

        <div className='flex flex-col items-center gap-6 mt-4'>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: '#3D56F0' }}>
              <Tabs textColor='inherit' value={value} onChange={handleChange} aria-label='lab API tabs example'>
                <Tab label='Infomation' value='1' sx={{ color: 'var(--header)' }} />
                <Tab label='Reviews' value='2' sx={{ color: 'var(--header)' }} />
              </Tabs>
            </Box>
            <TabPanel value='1' sx={{ width: '100%' }}>
              <Infomation event={event!} />
            </TabPanel>
            <TabPanel value='2' sx={{ width: '100%' }}>
              <Comments eventId={event?.id!} ownerId={event?.creatorId!} />
            </TabPanel>
          </TabContext>
        </div>

        <EventsRelate categoryIds={event?.categoryIds} />

        {openDialog && (
          <ConfirmDialog
            title='Buy Ticket'
            description='Sorry, The minimum number of tickets must be 0'
            open={openDialog}
            setOpen={(value) => {
              setOpenDialog(value)
            }}
            action='Ok'
          />
        )}
      </div>
    </ProtectedLayout>
  )
}

export default EventDetail

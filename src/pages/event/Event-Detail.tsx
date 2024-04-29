//hook
import { useState } from 'react'

//component
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import TabPanel from '@mui/lab/TabPanel'
import Divider from '@mui/material/Divider'
import TabContext from '@mui/lab/TabContext'
import Infomation from '@components/Infomation'
import EventCard from '@components/event/EventCard'
import ConfirmDialog from '@components/Dialog'
import Comments from '@components/Comments'

//icons
import { MdStarRate } from 'react-icons/md'
import { IoShareSocialOutline, IoLocationOutline, IoAdd } from 'react-icons/io5'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'
import { GrSubtract } from 'react-icons/gr'

//map
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '80%',
  height: '300px',
  borderRadius: '10px'
}

const center = {
  lat: 10.8713134,
  lng: 106.8025164,
  text: 'University of Information Technology'
}

const mockEvent = {
  img: 'https://res.cloudinary.com/dadvtny30/image/upload/v1712409123/eventhub/event/w3xvrrue35iu1gncudsa.jpg',
  title: 'JobFair',
  location: 'UIT - Linh Trung, Thu Duc, HCM City',
  time: '01/04/2003 Wednesday - 02:00 AM',
  description:
    'lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.',
  price: 6700,
  type: 'Job'
}

const EventDetail = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    // eslint-disable-next-line no-undef
    googleMapsApiKey: 'AIzaSyDNUAbz1SHrSJ7M0pFlV-8xxCSg53lOVmM',
    libraries: ['places']
  })

  const [value, setValue] = useState<string>('1')
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [quality, setQuality] = useState<number>(1)

  const handleIncreaseQuantity = () => {
    setQuality((pre) => pre + 1)
  }

  const handleDecreaseQuantity = () => {
    return quality > 1 ? setQuality((pre) => pre - 1) : setOpenDialog(true)
  }

  const handleChange = (_event: any, newValue: string) => {
    setValue(newValue)
  }

  return (
    <div className='w-full'>
      <div className='px-[100px] flex flex-col gap-6'>
        <div className='h-[500px]'>
          <img
            src='https://res.cloudinary.com/dadvtny30/image/upload/v1712409118/eventhub/event/infflklkudlatzvf8gsz.jpg'
            alt=''
            loading='lazy'
            className='w-full h-full object-cover rounded-xl'
          />
        </div>
        <div className='w-full flex items-center justify-between'>
          <h1>Sound Of Chrismus 2024</h1>
          <div className='flex items-center gap-2'>
            <MdStarRate color='gray' size='36px' />
            <IoShareSocialOutline color='gray' size='36px' />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='w-full flex flex-col gap-4'>
            <div className='flex flex-col gap-y-3'>
              <h4>Date and Time</h4>
              <div className='flex items-center gap-1'>
                <FaRegCalendarAlt color='gray' size='24px' />
                <p>Saturday, 2 December 2023</p>
              </div>
              <div className='flex items-center gap-1'>
                <IoMdTime color='gray' size='24px' />
                <p>6h30 PM - 9:30 PM</p>
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <h4>Location</h4>
              <div className='flex gap-1'>
                <IoLocationOutline color='gray' size='24px' />
                <p className='max-w-[500px]'>
                  Bal Gandharva Rang Mandir, Near Junction Of 24th & 32nd Road & Patwardhan Park,Off Linking Road,
                  Bandra West., Mumbai, India.
                </p>
              </div>
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={14}
                  options={{
                    // zoomControlL: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false
                  }}
                  // onLoad={onLoad}
                  // onUnmount={onUnmount}
                >
                  {/* Child components, such as markers, info windows, etc. */}
                  <Marker position={center} title='UIT' />
                </GoogleMap>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className='relative w-1/3 flex flex-col gap-3 bg-primary-100 rounded-md px-4 py-2'>
            <h3 className='text-black text-2xl font-bold mb-4'>Payment Information</h3>
            <div className='flex items-center justify-between'>
              <div className='w-[120px] flex p-1 items-center justify-around border border-solid border-gray300 rounded-3xl'>
                <button
                  onClick={handleDecreaseQuantity}
                  className='flex items-center justify-center p-2 rounded-full bg-primary-200 hover:bg-gray200'
                >
                  <GrSubtract color='#333' />
                </button>
                <p className='text-black'>{quality}</p>
                <button
                  onClick={handleIncreaseQuantity}
                  className='flex items-center justify-center p-2 rounded-full bg-primary-200  hover:bg-gray200'
                >
                  <IoAdd color='#333' />
                </button>
              </div>
              <span className='text-black'>
                <span className='font-bold text-black'>300.000 VNĐ</span> / Ticket
              </span>
            </div>
            <Divider className='mt-6 mb-[30px]' />
            <div>
              <div className='flex items-center justify-between '>
                <span className='text-black'>Total Price</span>
                <span className='font-bold text-black'>500.000 VNĐ</span>
              </div>
              <div className='flex items-center justify-between mt-[10px]'>
                <span className='text-black'>Discount</span>
                <span className='font-bold text-black'>100.000 VNĐ</span>
              </div>
            </div>
            <Divider className='mt-[21px] mb-6' />
            <div className='flex items-center justify-between'>
              <span className='font-bold text-black'>Total Payment</span>
              <span className='text-2xl font-bold text-primary-500'>100.000 VNĐ</span>
            </div>
            <button className='absolute bottom-10 bg-primary text-white left-[50%] translate-x-[-50%] w-4/5 py-2 rounded-sm hover:bg-primary-500'>
              Checkout
            </button>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center gap-6 mt-4'>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: '#3D56F0' }}>
            <Tabs textColor='inherit' value={value} onChange={handleChange} aria-label='lab API tabs example'>
              <Tab label='Infomation' value='1' />
              <Tab label='Reviews' value='2' />
            </Tabs>
          </Box>
          <TabPanel value='1' sx={{ width: '100%' }}>
            <Infomation />
          </TabPanel>
          <TabPanel value='2' sx={{ width: '100%' }}>
            <Comments />
          </TabPanel>
        </TabContext>
      </div>

      <div className='flex flex-col items-center px-[150px] py-8 gap-6'>
        <h1 className='text-header font-bold text-3xl'>Related Events</h1>
        <div className='grid grid-flow-col auto-cols-fr gap-4'>
          {[0, 1, 2].map((item) => (
            <EventCard key={item} {...mockEvent} />
          ))}
        </div>
      </div>

      {openDialog && (
        <ConfirmDialog
          title='Buy Ticket'
          description='Sorry, The minimum number of tickets must be 1'
          open={openDialog}
          setOpen={(value) => {
            setOpenDialog(value)
          }}
          action='Ok'
        />
      )}
    </div>
  )
}

export default EventDetail

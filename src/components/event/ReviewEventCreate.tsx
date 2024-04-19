/* eslint-disable no-unused-vars */
//icons
import { MdStarRate } from 'react-icons/md'
import { IoShareSocialOutline, IoLocationOutline } from 'react-icons/io5'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { IoMdTime, IoMdAdd } from 'react-icons/io'
import { IoTicketOutline } from 'react-icons/io5'

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

interface Props {
  setActive: (value: number) => void
}
const ReviewEventCreate = (props: Props) => {
  const { setActive } = props

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    // eslint-disable-next-line no-undef
    googleMapsApiKey: 'AIzaSyDNUAbz1SHrSJ7M0pFlV-8xxCSg53lOVmM',
    libraries: ['places']
  })

  const handlePublishEvent = () => {}

  return (
    <div className='w-full px-40 mt-10'>
      <div className='flex flex-col gap-6 border-[3px] border-textGray rounded-2xl p-10'>
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
            <div className='flex justify-between'>
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
                <h3 className='text-black text-xl font-bold mb-4'>Ticket Information</h3>
                <div className='flex items-center gap-2'>
                  <IoTicketOutline />
                  <p>Ticket type: Price/Ticket</p>
                </div>
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
                    <p className='font-semibold'>Anh Quoc</p>
                    <button className='flex items-center gap-1 bg-primary px-2 py-1 rounded-md'>
                      <IoMdAdd color='white' size={24} />
                      <p className='text-white'>Follow</p>
                    </button>
                  </div>
                </div>
              </div>

              <div className='space-y-1'>
                <h5>Event Description</h5>
                <p>
                  Get ready to kick off the Christmas season in Mumbai with SOUND OF CHRISTMAS - your favourite LIVE
                  Christmas concert!.City Youth Movement invites you to the 4th edition of our annual Christmas
                  festivities - by the youth and for the youth! Feat. your favourite worship leaders, carols, quizzes
                  and some exciting surprises!.Bring your family and friends and sing along your favourite Christmas
                  carols on the 2nd of December, 6:30 PM onwards at the Balgandharva Rang Mandir, Bandra West. Book your
                  tickets now!
                </p>
                <h6>3 Reasons to attend the event:</h6>
                <p>1. The FIRST Christmas concert of Mumbai!</p>
                <p>2. A special Christmas Choir!</p>
                <p>3. Special Dance performances and many more surprises!</p>
              </div>
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
        <button className=' btn btn--primary ' onClick={handlePublishEvent}>
          Publish Event
        </button>
      </div>
    </div>
  )
}

export default ReviewEventCreate

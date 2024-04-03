import Input from '@mui/material/Input'
import FormControl from '@mui/material/FormControl'

import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'

//icons
import { FaRegCalendarAlt } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { IoMdTime } from 'react-icons/io'
import { FaUsers } from 'react-icons/fa'

const containerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
  lat: 10.8713134,
  lng: 106.8025164,
  text: 'University of Information Technology'
}

const Infomation = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    // eslint-disable-next-line no-undef
    googleMapsApiKey: 'AIzaSyDNUAbz1SHrSJ7M0pFlV-8xxCSg53lOVmM',
    libraries: ['places']
  })

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-center bg-body'>
        <div className='min-w-[200px] flex flex-col items-center justify-center gap-2 px-8 py-4 border-b-2 border-gray300'>
          <FaRegCalendarAlt color='#3D56F0' size={50} />
          <p className='text-header font-semibold'>Time</p>
          <p className='text-gray500 text-[14px]'>Thurday, 02/05/2024 02:00 AM</p>
        </div>

        <div className='min-w-[200px] flex flex-col items-center justify-center gap-2 px-8 py-4 border-b-2 border-gray300'>
          <IoLocationOutline color='#3D56F0' size={50} />
          <p className='text-header font-semibold'>Location</p>
          <p className='text-gray500 text-[14px]'>UIT, Thu Duc City, Ho Chi Minh City</p>
        </div>

        <div className='min-w-[200px] flex flex-col items-center justify-center gap-2 px-8 py-4 border-b-2 border-gray300'>
          <IoMdTime color='#3D56F0' size={50} />
          <p className='text-header font-semibold'>Happen</p>
          <p className='text-gray500 text-[14px]'>9 day</p>
        </div>

        <div className='min-w-[200px] flex flex-col items-center justify-center gap-2 px-8 py-4 border-b-2 border-gray300'>
          <FaUsers color='#3D56F0' size={50} />
          <p className='text-header font-semibold'>Participant</p>
          <p className='text-gray500 text-[14px]'>400 people</p>
        </div>
      </div>

      <div className='flex px-[150px] gap-8'>
        <div className='flex flex-col flex-auto gap-5 p-8 bg-body shadow-xl rounded-md'>
          <h1 className='text-header font-bold text-2xl'>Contact Info</h1>
          <p>
            If you have any questions or problems related to this event.
            <br />
            Do not hesitate to contact me.
          </p>
          <FormControl>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-4'>
                <Input value='Anh Quoc' />
                <Input value='anhquoc18092003@gmal.com' />
              </div>
              <Input placeholder='Say something' defaultValue='' />
            </div>
          </FormControl>
          <button className='px-4 py-3 rounded-3xl bg-primary font-semibold text-white w-[200px] hover:bg-primary-500'>
            Send Message
          </button>
        </div>
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
  )
}

export default Infomation

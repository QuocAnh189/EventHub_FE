//map
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '300px',
  borderRadius: '10px'
}

const center = {
  lat: 10.8713134,
  lng: 106.8025164,
  text: 'University of Information Technology'
}

const LocationEvent = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    // eslint-disable-next-line no-undef
    googleMapsApiKey: 'AIzaSyDNUAbz1SHrSJ7M0pFlV-8xxCSg53lOVmM',
    libraries: ['places']
  })

  return isLoaded ? (
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
  )
}

export default LocationEvent

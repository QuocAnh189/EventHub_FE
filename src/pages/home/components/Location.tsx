//map
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'

const center = {
  lat: 10.8713134,
  lng: 106.8025164,
  text: 'University of Information Technology'
}

interface Props {
  width?: any
}
const MapLocation = (props: Props) => {
  const { width } = props
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDNUAbz1SHrSJ7M0pFlV-8xxCSg53lOVmM',
    libraries: ['places']
  })

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{
        width: width ?? '100%',
        height: '300px',
        borderRadius: '10px'
      }}
      center={center}
      zoom={14}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false
      }}
    >
      <Marker position={center} title='UIT' />
    </GoogleMap>
  ) : (
    <></>
  )
}

export default MapLocation

//map
import { setLanguage, setRegion, setKey } from 'react-geocode'
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api'

setKey(import.meta.env.VITE_MAP_API_KEY)
setLanguage('en')
setRegion('vn')

const containerStyle = {
  width: '100%',
  height: '300px',
  borderRadius: '10px'
}

// const center = {
//   lat: 10.8713134,
//   lng: 106.8025164,
//   text: 'University of Information Technology'
// }

interface Props {
  position: any
}
const LocationEvent = (props: Props) => {
  const { position } = props

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
    libraries: ['places']
  })

  return isLoaded && position ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={position}
      zoom={14}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false
      }}
    >
      <Marker position={position!} title='UIT' />
    </GoogleMap>
  ) : (
    <></>
  )
}

export default LocationEvent

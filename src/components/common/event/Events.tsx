import EventCard from './EventCard'
import Img1 from '@assets/places/boat.jpg'
import Img2 from '@assets/places/tajmahal.jpg'
import Img3 from '@assets/places/water.jpg'
import Img4 from '@assets/places/place4.jpg'
import Img5 from '@assets/places/place5.jpg'
import Img6 from '@assets/places/place6.jpg'

const PlacesData = [
  {
    img: Img1,
    title: 'JobFair',
    location: 'UIT - Linh Trung, Thu Duc, HCM City',
    time: '01/04/2003 Wednesday - 02:00 AM',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 6700,
    type: 'Job'
  },
  {
    img: Img2,
    title: 'Carrer Day',
    location: 'UIT - Linh Trung, Thu Duc, HCM City',
    time: '01/04/2003 Wednesday - 02:00 AM',
    description:
      'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.',
    price: 6700,
    type: 'Job'
  },
  {
    img: Img3,
    title: 'Music with John',
    location: 'UIT - Linh Trung, Thu Duc, HCM City',
    time: '01/04/2003 Wednesday - 02:00 AM',
    description:
      'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.',
    price: 6200,
    type: 'Music'
  },
  {
    img: Img4,
    title: 'Coccoon Skincare',
    time: '01/04/2003 Wednesday - 02:00 AM',
    location: 'UIT - Linh Trung, Thu Duc, HCM City',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 6700,
    type: 'Cosmetics'
  },
  {
    img: Img5,
    title: 'FPT WorkShop',
    time: '01/04/2003 Wednesday - 02:00 AM',
    location: 'UIT - Linh Trung, Thu Duc, HCM City',
    description:
      'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.',
    price: 6700,
    type: 'Workshop'
  },
  {
    img: Img6,
    title: 'Seminar UIT',
    time: '01/04/2003 Wednesday - 02:00 AM',
    location: 'UIT - Linh Trung, Thu Duc, HCM City',
    description:
      'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.',
    price: 6200,
    type: 'Workshop'
  }
]

const Places = ({ handleOrderPopup }: any) => {
  return (
    <>
      <div className='dark:bg-gray-900 dark:text-white bg-gray-50 py-10'>
        <section data-aos='fade-up' className='container '>
          <h1 className=' my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>Best Events to Visit</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {PlacesData.map((item, index) => (
              <EventCard handleOrderPopup={handleOrderPopup} key={index} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Places

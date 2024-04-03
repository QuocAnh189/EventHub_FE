//component
import EventCard from '../event/EventCard'

//assets
import Img4 from '@assets/places/place4.jpg'
import Img5 from '@assets/places/place5.jpg'
import Img6 from '@assets/places/place6.jpg'

const Events = [
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

const BlogsComp = () => {
  return (
    <>
      <div className='dark:bg-gray-900 dark:text-white py-10'>
        <section data-aos='fade-up' className='container '>
          <h1 className=' my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>Our upcoming events</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
            {Events.map((item, index) => (
              <EventCard key={index} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogsComp

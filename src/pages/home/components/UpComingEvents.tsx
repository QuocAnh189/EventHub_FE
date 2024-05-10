//components
import EventCard from '@components/event/EventCard'
import { EEventStatus } from '@constants/enum'
import { useGetEventsQuery } from '@redux/services/eventApi'
import { IEvent } from 'interfaces/contents/event'

//redux

// const mockEvent = {
//   img: 'https://res.cloudinary.com/dadvtny30/image/upload/v1712409123/eventhub/event/w3xvrrue35iu1gncudsa.jpg',
//   title: 'JobFair',
//   location: 'UIT - Linh Trung, Thu Duc, HCM City',
//   time: '01/04/2003 Wednesday - 02:00 AM',
//   description:
//     'lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit.',
//   price: 6700,
//   type: 'Job'
// }

const UpComingEvents = () => {
  const { data: events } = useGetEventsQuery({ takeAll: false, type: EEventStatus.UPCOMING, size: 6 })

  return (
    <>
      <div className='dark:bg-gray-900 dark:text-white bg-gray-50 py-10'>
        <section data-aos='fade-up' className='container'>
          <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>Upcomming Events</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {events?.items?.map((event: IEvent, index: number) => (
              <EventCard key={`event-${index}`} event={event} />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default UpComingEvents

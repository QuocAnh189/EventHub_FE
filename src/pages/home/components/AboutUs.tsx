//hook
import { useTranslation } from 'react-i18next'

const AboutUs = () => {
  const { t } = useTranslation()
  return (
    <div className='container pt-14 text-header'>
      <div className='py-10'>
        <h1 className=' my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>{t('about us.title')}</h1>
        <p className='text-justify'>
          Event Management and Ticket is your premier destination for seamless event planning and ticketing solutions.
          With a dedicated team of professionals, we specialize in curating unforgettable experiences tailored to your
          unique vision. From corporate conferences to music festivals and everything in between, we handle every aspect
          of event coordination with precision and creativity. Our user-friendly ticketing platform ensures smooth
          transactions for both organizers and attendees, making event management effortless and efficient. Trust us to
          bring your events to life, leaving lasting impressions and unforgettable memories.
        </p>
        <br />
        <p>
          Whether you're organizing a small gathering or a large-scale extravaganza, our attention to detail and
          commitment to excellence guarantee success every time. Let us take the stress out of event planning so you can
          focus on what truly matters: creating memorable moments for your guests.
        </p>
      </div>
    </div>
  )
}

export default AboutUs

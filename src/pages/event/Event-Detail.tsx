import { useState } from 'react'

//component
import TabContext from '@mui/lab/TabContext'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import EventCard from '@components/common/event/EventCard'
import Tabs from '@mui/material/Tabs'
import TabPanel from '@mui/lab/TabPanel'
import Divider from '@mui/material/Divider'
import { Comments } from '@components/common/Comments'

//swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'

//icons
import { MdStarRate } from 'react-icons/md'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { GrSubtract } from 'react-icons/gr'
import { IoAdd } from 'react-icons/io5'
import { SlHandbag } from 'react-icons/sl'
import { SiZalo } from 'react-icons/si'
import Infomation from '@components/common/Infomation'

//components
// import {
//   Description,
//   Information,
//   Feedback
// } from '@/components/client/product';

const Events = [
  {
    img: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
    title: 'Coccoon Skincare',
    time: '01/04/2003 Wednesday - 02:00 AM',
    location: 'UIT - Linh Trung, Thu Duc, HCM City',
    description: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
    price: 6700,
    type: 'Cosmetics'
  },
  {
    img: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
    title: 'FPT WorkShop',
    time: '01/04/2003 Wednesday - 02:00 AM',
    location: 'UIT - Linh Trung, Thu Duc, HCM City',
    description:
      'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.',
    price: 6700,
    type: 'Workshop'
  },
  {
    img: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
    title: 'Seminar UIT',
    time: '01/04/2003 Wednesday - 02:00 AM',
    location: 'UIT - Linh Trung, Thu Duc, HCM City',
    description:
      'The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.',
    price: 6200,
    type: 'Workshop'
  }
]

const images = [
  'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
  'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
  'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
  'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
]

const EventDetail = () => {
  const [activeThumb, setActiveThumb] = useState<any>()

  const [quality, setQuality] = useState<number>(1)

  const handleIncreaseQuantity = () => {
    setQuality((pre) => pre + 1)
  }

  const handleDecreaseQuantity = () => {
    if (quality > 1) {
      setQuality((pre) => pre - 1)
    }
  }

  const [value, setValue] = useState('1')

  const handleChange = (_event: any, newValue: string) => {
    setValue(newValue)
  }

  return (
    <div className='w-full'>
      <div className='px-[150px] flex bg-body pt-4 gap-4'>
        <div className='w-2/5'>
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
            className='product-images-slider'
          >
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item} alt='product images' />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setActiveThumb}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
            className='product-images-slider-thumbs'
          >
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='product-images-slider-thumbs-wrapper'>
                  <img src={item} alt='product images' />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='w-3/5 flex flex-col gap-2'>
          <div className='flex items-center gap-1'>
            <p className='text-header font-semibold text-2xl'>Jobfair University</p>
            <div className='p-2 rounded-lg text-primary'>Incoming</div>
          </div>

          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-1'>
              <MdStarRate color='orange' />
              <MdStarRate color='orange' />
              <MdStarRate color='orange' />
              <MdStarRate color='orange' />
              <MdStarRate color='orange' />
            </div>
            <p className='text-gray500 text-sm'>4 Review</p>
            <p className=''>
              Available: <span className='text-gray500'>20</span>
            </p>
          </div>

          <div className='flex items-center gap-2'>
            <div className='flex items-center gap-1'>
              <p className='text-xl text-gray500'>$48.00</p>
              <p className='text-xl text-primary font-semibold'>$17.28</p>
            </div>
            <div className='py-1 px-2 text-error bg-error/10 rounded-2xl'>20% discount</div>
          </div>

          <Divider />

          <div className='w-full py-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <p className='font-semibold'>Organizator: </p>
                <img
                  src='https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
                  alt=''
                  className='w-[40px] h-[40px] object-cover rounded-full'
                />
                <p className='font-semibold text-header'>Anh Quoc</p>
              </div>
              <div className='flex items-center gap-2'>
                <p className='font-semibold'>Share item: </p>
                <div className='flex items-center gap-4'>
                  <a href='/'>
                    <FaFacebookF size={20} color='#006dfa' />
                  </a>
                  <a href='/'>
                    <FaTwitter size={20} color='#5bc0ff' />
                  </a>
                  <a href='/'>
                    <FaInstagram size={20} color='#f21b7d' />
                  </a>
                  <a href='/'>
                    <SiZalo size={24} color='#5bc0ff' />
                  </a>
                </div>
              </div>
            </div>
            <p className='text-gray500 text-justify'>
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh
              diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.
            </p>
          </div>

          <Divider />

          <div className='py-2 flex items-center justify-between'>
            <div className='w-[120px] flex p-1 items-center justify-around border border-solid border-gray300 rounded-3xl'>
              <button
                onClick={handleDecreaseQuantity}
                className='flex items-center justify-center p-2 rounded-full bg-primary-100 hover:bg-gray200'
              >
                <GrSubtract />
              </button>
              <p>{quality}</p>
              <button
                onClick={handleIncreaseQuantity}
                className='flex items-center justify-center p-2 rounded-full bg-primary-100 hover:bg-gray200'
              >
                <IoAdd />
              </button>
            </div>
            <button className='px-16 py-2 bg-primary hover:bg-primary-500 flex items-center gap-2 rounded-3xl hover:bg-subprimary'>
              <p className='text-white'>Checkout</p>
              <SlHandbag color='white' />
            </button>
          </div>

          <Divider />

          <div className='space-y-2'>
            <div className='flex items-center gap-1'>
              <p className='text-header font-semibold'>Category: </p>
              <p className='text-gray500'>Vegetables </p>
            </div>

            <p className='text-gray500'>
              <span className='text-header font-semibold'>Description:</span>Vegetables Healthy Chinese Cabbage Green
              Cabbage
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center  py-8 gap-6'>
        {/* <Box sx={{ width: '100%', typography: 'body1' }}> */}
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
        {/* </Box> */}
      </div>

      <div className='flex flex-col items-center px-[150px] py-8 gap-6'>
        <h1 className='text-black font-bold text-3xl'>Related Events</h1>
        <div className='grid grid-flow-col auto-cols-fr gap-4'>
          {Events.map((item, index) => (
            <EventCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventDetail

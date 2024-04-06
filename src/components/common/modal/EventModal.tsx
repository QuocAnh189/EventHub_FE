import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

//component
import Divider from '@mui/material/Divider'

//swiper
import './event.scss'
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
import { SiZalo } from 'react-icons/si'
import { BiPurchaseTagAlt } from 'react-icons/bi'
import ConfirmDialog from '../Dialog'

const images = [
  'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
  'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
  'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg',
  'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
]

export const EventModal = () => {
  const natigate = useNavigate()
  const [activeThumb, setActiveThumb] = useState<any>()
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [quality, setQuality] = useState<number>(1)

  const handleIncreaseQuantity = () => {
    setQuality((pre) => pre + 1)
  }

  const handleDecreaseQuantity = () => {
    return quality > 1 ? setQuality((pre) => pre - 1) : setOpenDialog(true)
  }

  return (
    <div className='flex bg-body px-4 pt-4 gap-4'>
      <div className='w-1/2'>
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
      <div className='w-1/2 flex flex-col gap-2'>
        <div className='flex items-center gap-1'>
          <p className='text-black font-semibold text-2xl'>JobFair University</p>
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
            Available: <span className='text-gray500'>30</span>
          </p>
        </div>

        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-1'>
            <div className='relative flex items-center justify-center'>
              <p className='text-xl text-gray500'>$48.00</p>
              <Divider color='black' sx={{ height: '2px', width: '100%', position: 'absolute' }} />
            </div>
            <p className='text-xl text-primary font-semibold'>$17.28</p>
          </div>
          <div className='py-1 px-2 text-error bg-error/10 rounded-2xl'>20% Discount</div>
        </div>

        <Divider />

        <div className='w-full py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2 py-2'>
              <p className='font-semibold'>Organization</p>
              <img
                src='https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
                alt=''
                className='w-[40px] h-[40px] object-cover rounded-full'
              />
            </div>
            <div className='flex items-center gap-2'>
              <p className='font-semibold'>Share: </p>
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
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam,
            blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.
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
            <p className='text-white'>Buy Ticket</p>
            <BiPurchaseTagAlt color='white' />
          </button>
        </div>

        <Divider />

        <div className='space-y-2'>
          <div className='flex items-center gap-1'>
            <p className='text-black font-semibold'>Category: </p>
            <p className='text-gray500'>Music</p>
          </div>

          <p className='text-gray500'>
            <span className='text-black font-semibold'>Description:</span>Vegetables Healthy Chinese Cabbage Green
            Cabbage
          </p>
        </div>

        <button
          onClick={() => {
            natigate('event/123')
          }}
          className='absolute bottom-4 right-4 hover:underline font-bold rounded-md text-primary'
        >
          View Detail
        </button>
      </div>
      {openDialog && (
        <ConfirmDialog
          title='Buy Ticket'
          description='Sorry, The minimum number of tickets must be 1'
          open={openDialog}
          setOpen={(value) => {
            setOpenDialog(value)
          }}
        />
      )}
    </div>
  )
}

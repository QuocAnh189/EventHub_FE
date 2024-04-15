//component
import FormControl from '@mui/material/FormControl'

//icons
import { FaRegCalendarAlt } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { IoMdTime } from 'react-icons/io'
import { FaUsers } from 'react-icons/fa'
import { IoMdAdd } from 'react-icons/io'

import classNames from 'classnames'

const Infomation = () => {
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

      <div className='flex flex-col px-[100px] gap-8'>
        <div className='space-y-2'>
          <h5>Organization By</h5>
          <div className='flex items-center gap-3'>
            <img
              src='https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
              alt=''
              className='w-[50px] h-[50px] object-cover rounded-full'
            />
            <div>
              <p className='font-semibold'>Anh Quoc</p>
              <button className='flex items-center gap-1 bg-primary px-2 py-1 rounded-md'>
                <IoMdAdd color='white' size={24} />
                <p className='text-white'>Follow</p>
              </button>
            </div>
          </div>
        </div>

        <div className='space-y-1'>
          <h5>Event Description</h5>
          <p>
            Get ready to kick off the Christmas season in Mumbai with SOUND OF CHRISTMAS - your favourite LIVE Christmas
            concert!.City Youth Movement invites you to the 4th edition of our annual Christmas festivities - by the
            youth and for the youth! Feat. your favourite worship leaders, carols, quizzes and some exciting
            surprises!.Bring your family and friends and sing along your favourite Christmas carols on the 2nd of
            December, 6:30 PM onwards at the Balgandharva Rang Mandir, Bandra West. Book your tickets now!
          </p>
          <h6>3 Reasons to attend the event:</h6>
          <p>1. The FIRST Christmas concert of Mumbai!</p>
          <p>2. A special Christmas Choir!</p>
          <p>3. Special Dance performances and many more surprises!</p>
        </div>
      </div>

      <div className='flex px-[100px] gap-8'>
        <div className='flex flex-col flex-auto gap-5 p-8 bg-body shadow-xl rounded-md'>
          <h1 className='text-header font-bold text-2xl'>Contact Info</h1>
          <p>
            If you have any questions or problems related to this event.
            <br />
            Do not hesitate to contact me.
          </p>
          <FormControl>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center gap-4 text-header'>
                <div className='field-wrapper'>
                  <label className='field-label' htmlFor='qty'>
                    Name
                  </label>
                  <input className={classNames('field-input')} id='qty' placeholder='0' defaultValue='Anh Quoc' />
                </div>
                <div className='field-wrapper'>
                  <label className='field-label' htmlFor='qty'>
                    Email
                  </label>
                  <input
                    className={classNames('field-input')}
                    id='qty'
                    placeholder='0'
                    defaultValue='anhquoc18092003@gmail.com'
                  />
                </div>
              </div>
              <div className='field-wrapper'>
                <label className='field-label' htmlFor='qty'>
                  Email
                </label>
                <input className={classNames('field-input')} id='qty' placeholder='Say something' />
              </div>
            </div>
          </FormControl>
          <button className='px-4 py-3 rounded-3xl bg-primary font-semibold text-white w-[200px] hover:bg-primary-500'>
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default Infomation

//images
import { logoText_Img } from '@assets/images/common'

export const Bottom = () => {
  return (
    <footer className='px-4 py-8 text-white bg-bgBlack'>
      <div className='w-full flex flex-col items-center gap-4 mdl:flex-row justify-between'>
        <div className='flex flex-col justify-between'>
          <div className='flex items-center gap-2'>
            <img loading='lazy' src={logoText_Img} alt='Logo' className='w-[140px] h-[60px] object-contain' />
          </div>
          <p className='text-gray500 text-sm max-w-80'>
            Where every event , Connecting moments , easily and effciently
          </p>
          <div className='flex items-center gap-3'>
            <button>
              <p className='text-white text-sm font-semibold'>(219) 555-014</p>
              <div className='w-full bg-primary h-[2px]' />
            </button>
            <span className='text-gray500'>or</span>
            <button>
              <p className='text-white  text-sm font-semibold'>eventhub @gm.uit.edu.vn</p>
              <div className='w-full bg-primary h-[2px]' />
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-4 mdl:flex-row mdl:gap-20'>
          <div className='flex flex-col text-gray500 gap-1'>
            <p className='text-special pb-2 font-semibold'>My Account</p>
            <p className='hover:underline hover:cursor-pointer'>My Account</p>
            <p className='hover:underline hover:cursor-pointer'>Reviews</p>
            <p className='hover:underline hover:cursor-pointer'>Status</p>
            <p className='hover:underline hover:cursor-pointer'>Wishlist</p>
          </div>
          <div className='flex flex-col text-gray500 gap-1'>
            <p className='text-special pb-2 font-semibold'>Helps</p>
            <p className='hover:underline hover:cursor-pointer'>Contact</p>
            <p className='hover:underline hover:cursor-pointer'>Faqs</p>
            <p className='hover:underline hover:cursor-pointer'>Terms & Condition</p>
            <p className='hover:underline hover:cursor-pointer'>Privacy Policy</p>
          </div>
          <div className='flex flex-col text-gray500 gap-1'>
            <p className='text-special pb-2 font-semibold'>FEATURES</p>
            <p className='hover:underline hover:cursor-pointer'>Gantt Chart</p>
            <p className='hover:underline hover:cursor-pointer'>Dashboards</p>
            <p className='hover:underline hover:cursor-pointer'>Mind Maps</p>
            <p className='hover:underline hover:cursor-pointer'>Automations</p>
          </div>
          <div className='flex flex-col text-gray500 gap-1'>
            <p className='text-special pb-2 font-semibold'>Compare</p>
            <p className='hover:underline hover:cursor-pointer'>vs Jira</p>
            <p className='hover:underline hover:cursor-pointer'>vs Notion</p>
            <p className='hover:underline hover:cursor-pointer'>vs Trello</p>
            <p className='hover:underline hover:cursor-pointer'>vs Smartsheet</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

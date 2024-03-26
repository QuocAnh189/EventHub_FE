//images
import { logoText_Img } from '@assets/images/common'

export function Bottom() {
  return (
    <footer className='px-32 py-8 bg-neutral-900 flex justify-between items-center text-white'>
      <div className='w-full flex items-center justify-between'>
        <div className='flex flex-col items-start justify-between'>
          <div className='flex items-center gap-2'>
            <img src={logoText_Img} alt='Logo' className='w-[140px] h-[60px] object-contain' />
          </div>
          <p className='text-gray500 text-sm max-w-80'>
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
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
        <div className='flex items-center gap-20'>
          <div className='flex flex-col items-start text-gray500 gap-1'>
            <h1 className='text-special pb-2 font-semibold'>My Account</h1>
            <p className='hover:underline hover:cursor-pointer'>My Account</p>
            <p className='hover:underline hover:cursor-pointer'>Reviews</p>
            <p className='hover:underline hover:cursor-pointer'>Status</p>
            <p className='hover:underline hover:cursor-pointer'>Wishlist</p>
          </div>
          <div className='flex flex-col items-start text-gray500 gap-1'>
            <h1 className='text-special pb-2 font-semibold'>Helps</h1>
            <p className='hover:underline hover:cursor-pointer'>Contact</p>
            <p className='hover:underline hover:cursor-pointer'>Faqs</p>
            <p className='hover:underline hover:cursor-pointer'>Terms & Condition</p>
            <p className='hover:underline hover:cursor-pointer'>Privacy Policy</p>
          </div>
          <div className='flex flex-col items-start text-gray500 gap-1'>
            <h1 className='text-special pb-2 font-semibold'>FEATURES</h1>
            <p className='hover:underline hover:cursor-pointer'>Gantt Chart</p>
            <p className='hover:underline hover:cursor-pointer'>Dashboards</p>
            <p className='hover:underline hover:cursor-pointer'>Mind Maps</p>
            <p className='hover:underline hover:cursor-pointer'>Automations</p>
          </div>
          <div className='flex flex-col items-start text-gray500 gap-1'>
            <h1 className='text-special pb-2 font-semibold'>Compare</h1>
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

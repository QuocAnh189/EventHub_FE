//components
import Spring from '@components/Spring'

const UserProfilePanel = () => {
  return (
    <Spring className='card flex flex-col justify-center gap-5'>
      <button className='flex items-center gap-4 w-fit'>
        <span className='icon-wrapper text-red'>
          <i className='icon-bell-solid' />
        </span>
        <span className='text-header'>
          Notifications <span className='subheading-2'>(2)</span>
        </span>
      </button>
      <button className='flex items-center gap-4 w-fit'>
        <span className='icon-wrapper text-green'>
          <i className='icon-message-solid' />
        </span>
        <span className='text-header'>
          Messages <span className='subheading-2'>(7)</span>
        </span>
      </button>
    </Spring>
  )
}

export default UserProfilePanel

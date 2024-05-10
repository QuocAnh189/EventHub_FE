import Spring from '@components/Spring'
import { useAppSelector } from '@hooks/useRedux'

const UserProfileInfo = () => {
  const user = useAppSelector((state) => state.user.user)

  return (
    <Spring className='card flex items-center'>
      <div className='flex flex-col gap-5'>
        <div className='flex items-center gap-4 text-header'>
          <span className='icon-wrapper mt-1'>
            <i className='icon icon-envelope-solid' />
          </span>
          {user?.email}
        </div>

        <div className='flex items-center gap-4 text-header'>
          <span className='icon-wrapper mt-1'>
            <i className='icon icon-mobile-solid' />
          </span>
          +1 123-123-123
        </div>
        <div className='flex items-center gap-4 text-header'>
          <span className='icon-wrapper mt-1'>
            <i className='icon icon-whatsapp' />
          </span>
          +1 123-123-123
        </div>
        <button className='flex items-center gap-4 w-fit text-header'>
          <span className='icon-wrapper mt-1'>
            <i className='icon icon-file-arrow-down-solid' />
          </span>
          Profile Information file
        </button>
      </div>
    </Spring>
  )
}

export default UserProfileInfo

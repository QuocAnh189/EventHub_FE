//hook
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@hooks/useRedux'
import { UseFormSetValue } from 'react-hook-form'

// components
import Spring from '@components/Spring'

//redux
import { useSignOutMutation } from '@redux/services/authApi'
import { setUser } from '@redux/slices/userSlice'

//interface
import { IUser } from 'interfaces/systems/user'

//assets
import useDefault from '@assets/common/user_default.png'

interface Props {
  avatar: string
  userName: string
  setValue: UseFormSetValue<IUser>
  roles: string[]
}
const UserProfileCard = (props: Props) => {
  const { avatar, setValue, userName, roles } = props
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [signOut, { isLoading: loadingLogout }] = useSignOutMutation()

  const handleChangeAvatar = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0])
    setValue('avatar', image)
  }

  const handleSignOut = async () => {
    const result = await signOut().unwrap()
    if (result) {
      localStorage.removeItem('token')
      dispatch(setUser(null))
      navigate('/')
    }
  }

  return (
    <Spring className='relative card flex flex-col items-center justify-center'>
      <div className='relative mb-3.5'>
        <img
          loading='lazy'
          className='relative rounded-full w-[110px] h-[110px]'
          src={avatar ? avatar : useDefault}
          alt=''
        />

        <button
          className='absolute z-10 right-0 bottom-0 h-10 w-10 bg-green text-widget rounded-full border-[3px]
                        border-widget border-solid transition hover:bg-green-darker hover:cursor-pointer'
          aria-label='Change profile picture'
        >
          <i className='inline-block icon-camera-solid mt-1' />
        </button>
        <input
          className='absolute z-10 right-0 bottom-0 h-10 w-10 bg-green text-widget rounded-full border-[3px]
                        border-widget border-solid transition hover:bg-green-darker opacity-0 hover:cursor-pointer'
          type='file'
          accept='*/*'
          onChange={handleChangeAvatar}
        />
      </div>
      <h4>{userName}</h4>
      <span className='badge badge--square bg-red min-w-[96px] mt-2.5'>{roles?.join(',')}</span>

      <button disabled={loadingLogout} onClick={handleSignOut} className='btn btn--secondary w-full md:max-w-[280px]'>
        Log Out
      </button>
    </Spring>
  )
}

export default UserProfileCard

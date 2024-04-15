// hooks
import { useWindowSize } from 'react-use'

// components
import { FormSignUp } from '@components/auth'

// assets
import authImg from '@assets/auth/bg-auth.png'
import logoText_Img from '@assets/common/logo-text.png'

const SignUp = () => {
  const { width } = useWindowSize()

  return (
    <div className='flex-1 grid grid-cols-1 lg:grid-cols-2 4xl:grid-cols-[minmax(0,_1030px)_minmax(0,_1fr)] min-h-screen'>
      {width >= 1024 && (
        <div className='flex flex-col justify-center items-center lg:p-[60px]'>
          <a className='logo' href='/'>
            <img loading='lazy' src={logoText_Img} alt='EventHub' className='w-[200px] object-cover' />
          </a>
          <p className='text-center tracking-[0.2px] font-semibold text-lg leading-6 max-w-[540px] my-7 mx-auto'>
            Where every event finds its perfect audience, creating unforgettable moments and lasting connections
          </p>
          <img loading='lazy' className='max-w-[780px]' src={authImg} alt='media' />
        </div>
      )}
      <div className='relative w-full h-screen flex justify-center items-center'>
        <FormSignUp />
      </div>
    </div>
  )
}

export default SignUp

//hook
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

//validate
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

//navigate
import { useNavigate } from 'react-router-dom'

//icons
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'
import googleIcon from '@assets/icons/google.png'
import facebookIcon from '@assets/icons/facebook.png'

//type
import { LoginPayload, InitLogin } from '@type/auth'

const formSchema = z.object({
  email: z.string().min(1, 'Email is not empty'),
  password: z.string().min(1, 'Password is not emty')
})

//motion
import { motion } from 'framer-motion'

interface SignInProps {
  handleForgotPassword: (value: boolean) => void
}

const FormSignIn = (props: SignInProps) => {
  const { handleForgotPassword } = props

  const navigate = useNavigate()

  const [showPassWord, setShowPassWord] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginPayload>({
    resolver: zodResolver(formSchema),
    defaultValues: InitLogin
  })

  const onSubmit: SubmitHandler<LoginPayload> = async (data: LoginPayload) => {
    try {
      alert(data.email)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='block h-full'>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-4 flex flex-col'>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className='relative mb-6'
        >
          <input
            {...register('email')}
            type='email'
            name='email'
            className='block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-[0.8rem] font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px] focus:border-bgBlue'
            placeholder='Enter email'
          />
          {errors.email && <p className='mt-1 text-textError'>{errors.email.message}</p>}
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className='relative mb-6'
        >
          <input
            {...register('password')}
            type={showPassWord ? 'text' : 'password'}
            name='password'
            className='min-h-[auto] w-full rounded-2xl border-[2px] bg-transparent px-3 py-[0.8rem] font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px] focus:border-bgBlue'
            placeholder='Password'
          />
          {errors.password && <p className='mt-1 text-textError'>{errors.password.message}</p>}
          <button
            className='absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer'
            onClick={() => {
              setShowPassWord(!showPassWord)
            }}
          >
            {showPassWord ? (
              <AiFillEye className=' h-[20px] w-[20px]' />
            ) : (
              <AiFillEyeInvisible className=' h-[20px] w-[20px]' />
            )}
          </button>
        </motion.div>

        <motion.button
          type='submit'
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className='flex w-full items-center justify-center rounded-2xl py-[0.6rem] font-bold leading-7 text-textWhite cursor-pointer bg-bgBlue'
        >
          Sign In
        </motion.button>
      </form>
      <div className='mt-3 flex w-full flex-col gap-y-2'>
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={() => navigate('/signup')}
          className='block w-full py-4 text-sm font-semibold hover:rounded-[18px] hover:bg-bgGrayLight hover:text-[15px]'
        >
          No account ? Sign up for FREE
        </motion.button>
        <motion.button
          onClick={() => handleForgotPassword(true)}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className='lue block  w-full py-4 text-sm font-semibold hover:rounded-[18px] hover:bg-bgGrayLight hover:text-[15px]'
        >
          I forgot my password
        </motion.button>

        <motion.button
          type='submit'
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className='flex w-full flex-row items-center justify-around rounded-2xl border-[2px] border-textPurple bg-white py-[0.8rem] font-bold text-textGray hover:bg-textPurpleBorder hover:text-textWhite'
          onClick={() => {}}
        >
          <img loading='lazy' src={googleIcon} alt='' className='block h-[20px] w-[20px]' />
          <span className='inline-block'>Sign in with Google</span>
          <span />
        </motion.button>

        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className='flex w-full flex-row items-center justify-around rounded-2xl border-[2px] border-textBlue bg-white py-[0.8rem] font-bold text-textGray hover:bg-bgBlue hover:text-textWhite'
          onClick={() => {}}
        >
          <img loading='lazy' src={facebookIcon} alt='' className='block h-[20px] w-[20px]' />
          <span className='inline-block'>Sign in with Facebook</span>
          <span />
        </motion.button>

        <button
          onClick={() => {
            navigate('/')
          }}
        >
          <motion.button
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className='mb-3 block w-full py-4 text-sm font-bold hover:rounded-[18px] hover:bg-bgGrayLight hover:text-[15px]'
          >
            Back
          </motion.button>
        </button>
      </div>
    </div>
  )
}

export default FormSignIn

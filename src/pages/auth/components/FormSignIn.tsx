/* eslint-disable react-hooks/exhaustive-deps */
//hook
import { useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

//component
import CircularProgress from '@mui/material/CircularProgress'

//validate
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

//icons
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'
import googleIcon from '@assets/icons/google.png'
import facebookIcon from '@assets/icons/facebook.png'

//type
import { LoginPayload, InitLogin } from '@type/auth'

//redux
import { useAppDispatch } from '@hooks/useRedux'
import { useSignInMutation, useGetProfileQuery } from '@redux/services/authApi'
import { setUser } from '@redux/slices/userSlice'

//motion
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'

const formSchema = z.object({
  identity: z.string().min(1, 'Identity is not empty'),
  password: z.string().min(1, 'Password is not emty')
})

interface SignInProps {
  handleForgotPassword: (value: boolean) => void
}

const FormSignIn = (props: SignInProps) => {
  const dispatch = useAppDispatch()
  const { handleForgotPassword } = props

  const navigate = useNavigate()

  const [showPassWord, setShowPassWord] = useState<boolean>(false)
  const [signIn, { isLoading }] = useSignInMutation()
  const { data: user, refetch } = useGetProfileQuery()

  useLayoutEffect(() => {
    if (user) {
      navigate('/organization')
      dispatch(setUser(user))
    }
  }, [user])

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
      const result = await signIn(data).unwrap()
      if (result) {
        localStorage.setItem('token', JSON.stringify(result))
        refetch()
      }
    } catch (error: any) {
      const message = error.data.message
      switch (message) {
        case 'Invalid credentials':
          toast.error('Your account or password is wrong')
          break
        default:
          break
      }
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
            {...register('identity')}
            type='text'
            name='identity'
            className='block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-[0.8rem] font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px] focus:border-bgBlue'
            placeholder='Enter account (email or username)'
          />
          {errors.identity && <p className='mt-1 text-textError'>{errors.identity.message}</p>}
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
            type='button'
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
          disabled={isLoading}
          type='submit'
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className='flex w-full items-center justify-center rounded-2xl py-[0.6rem] font-bold leading-7 text-textWhite cursor-pointer bg-bgBlue'
        >
          {isLoading ? <CircularProgress size={28} color='info' /> : 'Sign In'}
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

import { useState } from 'react'

//navigate
import { useNavigate } from 'react-router-dom'

//icons
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { googleIcon, facebookIcon } from '@assets/icons'

//motion
import { motion } from 'framer-motion'

export const FormSignIn = () => {
  const navigate = useNavigate()
  const [showPassWord, setShowPassWord] = useState<boolean>(false)

  return (
    <motion.main
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1 }}
      className='mx-auto mt-auto flex min-h-screen w-full max-w-full flex-col overflow-hidden bg-bgPink'
    >
      <div className='absolute left-[50%] top-[50%] min-h-full w-[600px] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-[50px] bg-white px-[100px] py-[60px] mdl:min-h-[600px]'>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className='mb-[30px] flex flex-row items-center justify-center gap-x-4'
        >
          <h1 className='text-4xl font-semibold'>Login</h1>
        </motion.div>
        <div className='block h-full'>
          <div className='mt-4 flex flex-col'>
            <div className=''>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className='relative mb-6'
              >
                <input
                  type='email'
                  name='mail'
                  className='block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-[0.8rem] font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px] focus:border-bgBlue'
                  placeholder='Enter email'
                  onChange={() => {}}
                  onKeyDown={() => {}}
                />
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className='relative mb-6'
              >
                <input
                  type={showPassWord ? 'text' : 'password'}
                  name='password'
                  className='min-h-[auto] w-full rounded-2xl border-[2px] bg-transparent px-3 py-[0.8rem] font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px] focus:border-bgBlue'
                  placeholder='Password'
                  onChange={() => {}}
                  onKeyDown={() => {}}
                />
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
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className='flex w-full items-center justify-center rounded-2xl py-[0.6rem] font-bold leading-7 text-textWhite cursor-pointer bg-bgBlue'
                onClick={() => {}}
                disabled={false}
              >
                Sign In
              </motion.button>
            </div>
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
                <img src={googleIcon} alt='' className='block h-[20px] w-[20px]' />
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
                <img src={facebookIcon} alt='' className='block h-[20px] w-[20px]' />
                <span className='inline-block'>Sign in with Facebook</span>
                <span />
              </motion.button>

              <a href='/'>
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  className='mb-3 block w-full py-4 text-sm font-bold hover:rounded-[18px] hover:bg-bgGrayLight hover:text-[15px]'
                >
                  Back
                </motion.button>
              </a>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 left-[50%] min-h-[70px] w-full translate-x-[-50%] text-center'>
          <p className='font-semibold text-textGray'>
            ©2024 event Hub -<span className='font-bold text-textBlack'>Imprint & Privacy Policy</span>
          </p>
        </div>
      </div>
    </motion.main>
  )
}

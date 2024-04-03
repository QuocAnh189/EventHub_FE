//hook
import { useMemo, useState } from 'react'

//navigate
import { useNavigate } from 'react-router-dom'

//icons
import { AiFillEye } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'

//motion
import { motion } from 'framer-motion'

//component
import Switch from 'react-switch'

interface SessionOneProps {
  nextSession: () => void
}
const SessionOne = (props: SessionOneProps) => {
  const { nextSession } = props
  const navigate = useNavigate()

  return (
    <div className='mt-4 flex flex-col'>
      <div className='flex flex-col'>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className='relative mb-6'
          data-te-input-wrapper-init
        >
          <input
            // value={props.mail}
            type='email'
            name='mail'
            className='block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-[0.8rem] font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px] focus:border-bgBlue'
            placeholder='Enter email'
            onChange={() => {}}
          />
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className='relative mb-6'
          data-te-input-wrapper-init
        >
          <input
            // value={props.mail}
            type='text'
            name='username'
            className='block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-[0.8rem] font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px] focus:border-bgBlue'
            placeholder='Enter Name'
            onChange={() => {}}
          />
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className='relative mb-6'
          data-te-input-wrapper-init
        >
          <input
            // value={props.mail}
            type='text'
            name='phone'
            className='block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-[0.8rem] font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px] focus:border-bgBlue'
            placeholder='Enter Phone'
            onChange={() => {}}
          />
        </motion.div>

        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className='flex w-full items-center justify-center rounded-2xl py-[0.6rem] font-bold leading-7 text-textWhite cursor-pointer bg-bgBlue'
          onClick={nextSession}
        >
          Submit
        </motion.button>
      </div>

      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className='mt-3 flex w-full flex-col gap-y-2'
      >
        <button
          onClick={() => navigate('/signin')}
          className='block w-full py-4 text-sm font-semibold hover:rounded-[18px] hover:bg-bgGrayLight hover:text-[15px]'
        >
          Already have an account? Sign In
        </button>

        <button
          className='block w-full py-4 text-sm font-bold hover:rounded-[18px] hover:bg-bgGrayLight hover:text-[15px]'
          onClick={() => navigate('/signin')}
        >
          Back
        </button>
      </motion.div>
    </div>
  )
}

interface SessionTwoProps {
  backSession: () => void
}
const SessionTwo = (props: SessionTwoProps) => {
  const { backSession } = props
  const navigate = useNavigate()

  const [check, setCheck] = useState<boolean>(false)
  const [showPassWord, setShowPassWord] = useState<boolean>(false)
  const [showConfirmPassWord, setShowConfirmPassWord] = useState<boolean>(false)

  return (
    <div className='mt-4 flex flex-col'>
      <div className='flex flex-col'>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className='relative mb-6'
          data-te-input-wrapper-init
        >
          <input
            // value={props.password}
            type={showPassWord ? 'text' : 'password'}
            name='password'
            className='min-h-[auto] w-full rounded-2xl border bg-transparent px-3 py-[0.8rem] font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px] focus:border-bgBlue'
            placeholder='Set password'
            onChange={() => {}}
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

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className='relative mb-6'
          data-te-input-wrapper-init
        >
          <input
            // value={props.password}
            type={showConfirmPassWord ? 'text' : 'password'}
            name='password'
            className='min-h-[auto] w-full rounded-2xl border bg-transparent px-3 py-[0.8rem] font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px] focus:border-bgBlue'
            placeholder='Confirm password'
            onChange={() => {}}
          />
          <button
            className='absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer'
            onClick={() => {
              setShowConfirmPassWord(!showPassWord)
            }}
          >
            {showPassWord ? (
              <AiFillEye className=' h-[20px] w-[20px]' />
            ) : (
              <AiFillEyeInvisible className=' h-[20px] w-[20px]' />
            )}
          </button>
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className='mb-4 flex w-full items-center justify-start text-right'
        >
          <Switch
            onChange={() => {
              setCheck(!check)
            }}
            checked={check}
          />
          <span className='ml-[10px] mt-0 inline-block h-[30px] text-sm font-semibold leading-[30px]'>
            Accept
            <a className='text-textBlueLight outline-none'>Terms of use </a>
            and
            <a className='text-textBlueLight outline-none'> Privacy policy</a>
          </span>
        </motion.div>

        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className='flex w-full items-center justify-center rounded-2xl py-[0.6rem] font-bold leading-7 text-textWhite cursor-pointer bg-bgBlue'
          onClick={() => {}}
        >
          Sign Up
        </motion.button>
      </div>

      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className='mt-3 flex w-full flex-col gap-y-2'
      >
        <button
          onClick={() => navigate('/signin')}
          className='block w-full py-4 text-sm font-semibold hover:rounded-[18px] hover:bg-bgGrayLight hover:text-[15px]'
        >
          Already have an account? Sign In
        </button>

        <button
          className='block w-full py-4 text-sm font-bold hover:rounded-[18px] hover:bg-bgGrayLight hover:text-[15px]'
          onClick={backSession}
        >
          Back
        </button>
      </motion.div>
    </div>
  )
}

export const FormSignUp = () => {
  const [sessionOne, setSessionOne] = useState<boolean>(true)

  const backSession = useMemo(() => {
    return () => {
      setSessionOne(true)
    }
  }, [])

  const nextSession = useMemo(() => {
    return () => {
      setSessionOne(false)
    }
  }, [])

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
          <h1 className='text-4xl font-semibold'>Register</h1>
        </motion.div>
        <div className='block h-full'>
          {sessionOne ? <SessionOne nextSession={nextSession} /> : <SessionTwo backSession={backSession} />}
        </div>
        <div className='absolute bottom-0 left-[50%] min-h-[40px] w-full translate-x-[-50%] text-center'>
          <p className='font-semibold text-textGray'>
            ©2024 event Hub -<span className='font-bold text-textBlack'>Imprint & Privacy Policy</span>
          </p>
        </div>
      </div>
    </motion.main>
  )
}

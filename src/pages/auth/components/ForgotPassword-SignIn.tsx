//hook
import { useState } from 'react'

//motion
import { motion } from 'framer-motion'

interface ForgotProps {
  handleForgotPassword: (value: boolean) => void
}

const ForgotPassword = (props: ForgotProps) => {
  const { handleForgotPassword } = props

  const [email, setEmail] = useState<string>('')

  const handleSubmit = () => {
    alert(email)
  }

  return (
    <div className='block h-full'>
      <div className='mt-4 flex flex-col'>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className='relative mb-6'
        >
          <input
            type='email'
            value={email}
            name='mail'
            className='block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-[0.8rem] font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px] focus:border-bgBlue'
            placeholder='Enter email'
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </motion.div>

        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className='flex w-full items-center justify-center rounded-2xl py-[0.6rem] font-bold leading-7 text-textWhite cursor-pointer bg-bgBlue'
          disabled={email ? false : true}
          onClick={handleSubmit}
        >
          Submit
        </motion.button>

        <button
          onClick={() => {
            handleForgotPassword(false)
          }}
        >
          <motion.button
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className='mt-3 block w-full py-4 text-sm font-bold hover:rounded-[18px] hover:bg-bgGrayLight hover:text-[15px]'
          >
            Back
          </motion.button>
        </button>
      </div>
    </div>
  )
}

export default ForgotPassword

//hook
import { ChangeEvent } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

//constant
import { PHONE_REGEX } from '@constants/regex'

//validate
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

//navigate
import { useNavigate } from 'react-router-dom'

//motion
import { motion } from 'framer-motion'

//type
import { SignUpPayloadOne } from '@type/auth'

//redux
import { useValidateUserMutation } from '@redux/services/authApi'
import { toast } from 'react-toastify'

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is not empty' })
    .max(50, { message: 'Email must not exceed 50 characters' })
    .email('Email invalid'),
  userName: z.string().min(1, 'Name is not empty').max(32, { message: 'Name must not exceed 32 characters' }),
  phoneNumber: z
    .string()
    .min(1, 'Phone is not empty')
    .regex(PHONE_REGEX, 'Phone is invalid')
    .max(12, { message: 'phone must not exceed 12 characters' })
})

interface SessionOneProps {
  formDataSessionOne: SignUpPayloadOne
  setFormDataSessionOne: (e: ChangeEvent<HTMLInputElement>) => void
  nextSession: () => void
}
const SessionOne = (props: SessionOneProps) => {
  const { formDataSessionOne, setFormDataSessionOne, nextSession } = props

  const navigate = useNavigate()

  const [validateUser, { isLoading }] = useValidateUserMutation()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpPayloadOne>({
    resolver: zodResolver(formSchema),
    defaultValues: formDataSessionOne
  })

  const onSubmit: SubmitHandler<SignUpPayloadOne> = async (data: SignUpPayloadOne) => {
    try {
      const result = await validateUser(data).unwrap()
      if (result) {
        nextSession()
      }
    } catch (error: any) {
      const message = error.data.message
      switch (message) {
        case 'Email already exists':
          toast.error('Email already exists')
          break
        case 'Phone already exists':
          toast.error('Phone already exists')
          break
        default:
          break
      }
    }
  }

  return (
    <div className='mt-4 flex flex-col'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
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
            onChange={setFormDataSessionOne}
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
            {...register('userName')}
            type='text'
            name='userName'
            className='block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-[0.8rem] font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px] focus:border-bgBlue'
            placeholder='Enter Name'
            onChange={setFormDataSessionOne}
          />
          {errors.userName && <p className='mt-1 text-textError'>{errors.userName.message}</p>}
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className='relative mb-6'
        >
          <input
            {...register('phoneNumber')}
            type='text'
            name='phoneNumber'
            className='block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-[0.8rem] font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px] focus:border-bgBlue'
            placeholder='Enter Phone'
            onChange={setFormDataSessionOne}
          />
          {errors.phoneNumber && <p className='mt-1 text-textError'>{errors.phoneNumber.message}</p>}
        </motion.div>

        <motion.button
          disabled={isLoading}
          type='submit'
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className='flex w-full items-center justify-center rounded-2xl py-[0.6rem] font-bold leading-7 text-textWhite cursor-pointer bg-bgBlue'
        >
          Submit
        </motion.button>
      </form>

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
          onClick={() => {
            navigate(-1)
          }}
        >
          Back
        </button>
      </motion.div>
    </div>
  )
}

export default SessionOne
// hooks
import { useMemo, useState, ChangeEvent } from 'react'
import { useWindowSize } from 'react-use'

//component
import SessionOne from './components/SessionOne-SignUp'
import SessionTwo from './components/SessionTwo-SignUp'

// assets
import authImg from '@assets/auth/bg-auth.png'
import logoText_Img from '@assets/common/logo-text.png'

//motion
import { motion } from 'framer-motion'

//type
import { SignUpPayload, SignUpPayloadOne, SignUpPayloadTwo, InitSignUpOne, InitSignUpTwo } from '@type/auth'

//redux
import { useSignUpMutation } from '@redux/services/authApi'
import { toast } from 'react-toastify'

const SignUp = () => {
  const { width } = useWindowSize()

  const [signUp, { isLoading }] = useSignUpMutation()

  const [formDataSessionOne, setFormDataSessionOne] = useState<SignUpPayloadOne>(InitSignUpOne)
  const [formDataSessionTwo, setFormDataSessionTwo] = useState<SignUpPayloadTwo>(InitSignUpTwo)

  const [showFormSessionOne, setShowFormSessionOne] = useState<boolean>(true)
  const [showFormSessionTwo, setShowFormSessionTwo] = useState<boolean>(false)

  const nextSession = useMemo(() => {
    return () => {
      setShowFormSessionOne(false)
      setShowFormSessionTwo(true)
    }
  }, [])

  const backSession = useMemo(() => {
    return () => {
      setShowFormSessionOne(true)
      setShowFormSessionTwo(false)
    }
  }, [])

  const handleChangeFormSessionOne = (e: ChangeEvent<HTMLInputElement> | any) => {
    setFormDataSessionOne({ ...formDataSessionOne, [e.target.name]: e.target.value })
  }

  const handleChangeFormSessionTwo = (e: ChangeEvent<HTMLInputElement> | any) => {
    setFormDataSessionTwo({ ...formDataSessionTwo, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    const formData: SignUpPayload = { ...formDataSessionOne, ...formDataSessionTwo }

    try {
      const result = await signUp(formData).unwrap()
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
              {showFormSessionOne && (
                <SessionOne
                  nextSession={nextSession}
                  formDataSessionOne={formDataSessionOne}
                  setFormDataSessionOne={handleChangeFormSessionOne}
                />
              )}
              {showFormSessionTwo && (
                <SessionTwo
                  backSession={backSession}
                  formDataSessionTwo={formDataSessionTwo}
                  setFormDataSessionTwo={handleChangeFormSessionTwo}
                  handleSubmit={handleSubmit}
                  disabled={isLoading}
                />
              )}
            </div>
            <div className='absolute bottom-0 left-[50%] min-h-[40px] w-full translate-x-[-50%] text-center'>
              <p className='font-semibold text-textGray'>
                ©2024 event Hub -<span className='font-bold text-textBlack'>Imprint & Privacy Policy</span>
              </p>
            </div>
          </div>
        </motion.main>
      </div>
    </div>
  )
}

export default SignUp

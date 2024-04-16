/* eslint-disable no-unused-vars */
//component
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

//icon
import { IoTicketOutline } from 'react-icons/io5'
import { IoPricetagOutline } from 'react-icons/io5'
import freeImg from '@assets/common/free.png'
import { IoMdAddCircleOutline } from 'react-icons/io'

interface Props {
  setActive: (value: number) => void
}
const TicketEventCreate = (props: Props) => {
  const { setActive } = props

  return (
    <div className='relative pt-10 pb-20 px-40 space-y-10 min-h-screen'>
      <div className='space-y-4'>
        <p className='text-xl font-bold tracking-wider'>What type of event are you running ?</p>
        <div className='flex items-center gap-8'>
          <div className='border-[2px] border-solid border-textGray rounded-lg py-4 px-12 flex flex-col items-center justify-center hover:cursor-pointer'>
            <IoTicketOutline size={42} />
            <p className='font-bold'>Ticketed Event</p>
            <p>My event require tickets for entry</p>
          </div>
          <div className='border-[2px] border-solid border-textGray rounded-lg py-4 px-12 flex flex-col items-center justify-center hover:cursor-pointer'>
            <img loading='lazy' src={freeImg} alt='' className='w-[42px]' />
            <p className='font-bold'>Free Event</p>
            <p>I'm running free event</p>
          </div>
        </div>
      </div>
      <div className='space-y-4'>
        <div className='flex items-center gap-2'>
          <p className='text-xl font-bold tracking-wider'>What ticket are you selling ?</p>
          <IoMdAddCircleOutline size={30} className='hover:cursor-pointer' />
        </div>
        <div className='flex items-center gap-8'>
          <FormControl>
            <FormLabel sx={{ fontWeight: 'bold' }}>Ticket Name</FormLabel>
            <TextField sx={{ width: '300px' }} id='outlined-basic' label='Enter the name of the ticket' size='small' />
          </FormControl>
          <FormControl>
            <FormLabel sx={{ fontWeight: 'bold' }}>Ticket Price</FormLabel>
            <TextField
              defaultValue='0.00'
              sx={{ width: '250px' }}
              size='small'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <IoPricetagOutline />
                  </InputAdornment>
                )
              }}
            />
          </FormControl>
        </div>
      </div>
      <div className='absolute flex items-center gap-4 right-8'>
        <button
          className='btn bg-textGray hover:text-white'
          onClick={() => {
            setActive(1)
          }}
        >
          Go back
        </button>
        <button
          className=' btn btn--primary '
          onClick={() => {
            setActive(3)
          }}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default TicketEventCreate

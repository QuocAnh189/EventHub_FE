//hook
import { forwardRef, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

//component
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import Card from './Card'

//constant
import { months, years } from '@constants/date'

interface Props {
  ref: any
  card: any
  // setIsCardFlipped: React.Dispatch<React.SetStateAction<boolean>>
}

const FormCard = forwardRef((props: Props) => {
  const { card, ref } = props

  const [isCardFlipped, setIsCardFlipped] = useState<boolean>(false)

  const onCvvFocus = () => {
    setIsCardFlipped(true)
  }

  const onCvvBlur = () => {
    setIsCardFlipped(false)
  }

  const {
    register,
    handleSubmit,
    // formState: { errors },
    watch
  } = useForm<any>({
    // resolver: zodResolver(divSchema),
    defaultValues: card
  })

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    try {
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      ref={ref}
      onSubmit={handleSubmit(onSubmit)}
      className='relative bg-body w-2/5 left-[50%] translate-x-[-50%] flex flex-col gap-4 top-[25%] rounded-xl shadow-xl pt-40 pb-10 px-10'
    >
      <div className='w-full absolute top-[-30%] left-[50%] translate-x-[-50%]'>
        <Card {...watch()} isCardFlipped={isCardFlipped} />
      </div>
      <div className='w-full space-y-1'>
        <label>Card Number</label>
        <FormControl sx={{ width: '100%' }} variant='outlined' {...register('cardNumber')}>
          <OutlinedInput id='cardNumber' name='cardNumber' aria-describedby='outlined-weight-helper-text' />
        </FormControl>
      </div>
      <div className='w-full space-y-1'>
        <label>Card Holder Name</label>
        <FormControl
          sx={{ width: '100%', borderRadius: '24px' }}
          size='medium'
          variant='outlined'
          {...register('cardHolder')}
        >
          <OutlinedInput id='cardHolder' name='cardHolder' aria-describedby='outlined-weight-helper-text' />
        </FormControl>
      </div>
      <div className='w-full flex justify-between'>
        <div className='space-y-2'>
          <label>Expiration Date</label>
          <div className='flex gap-3'>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id='demo-simple-select-label'>Month</InputLabel>
              <Select
                {...register('cardMonth')}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={watch().cardMonth}
                label='Month'
              >
                {months.map((item, index) => (
                  <MenuItem key={`year-${index}`} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id='demo-simple-select-label'>Year</InputLabel>
              <Select
                {...register('cardYear')}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={watch().cardYear}
                label='Year'
              >
                {years.map((item, index) => (
                  <MenuItem key={`year-${index}`} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className='flex flex-col items-end'>
          <label>CVV (Security Code)</label>
          <FormControl
            sx={{ width: '20ch' }}
            variant='outlined'
            {...register('cardCvv')}
            onFocus={onCvvFocus}
            onBlur={onCvvBlur}
          >
            <OutlinedInput id='cardCvv' name='cardCvv' aria-describedby='outlined-weight-helper-text' />
          </FormControl>
        </div>
      </div>
      <button type='submit' className='w-full py-3 bg-primary text-white rounded-2xl hover:bg-primary-500'>
        Submit
      </button>
    </form>
  )
})

export default FormCard

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
import { IBankCard } from 'interfaces/contents'

interface Props {
  ref: any
  card: IBankCard
  cardHolderName: string
  // setIsCardFlipped: React.Dispatch<React.SetStateAction<boolean>>
}

const FormCard = forwardRef((props: Props) => {
  const { card, ref, cardHolderName } = props

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
  } = useForm<IBankCard & { cardHolderName: string; cardCvc: string; cardNumber: string }>({
    // resolver: zodResolver(divSchema),
    defaultValues: { ...card, cardHolderName: cardHolderName, cardNumber: '' }
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
        <Card
          cardHolder={watch().cardHolderName}
          cardNumber={watch().cardNumber || '**** **** **** ' + card.last4}
          cardMonth={watch().expMonth}
          cardYear={watch().expYear}
          isCardFlipped={isCardFlipped}
        />
      </div>
      <div className='w-full space-y-1'>
        <label>Card Number</label>
        <FormControl sx={{ width: '100%' }} variant='outlined' {...register('cardNumber')}>
          <OutlinedInput
            id='cardNumber'
            name='cardNumber'
            aria-describedby='outlined-weight-helper-text'
            placeholder={'**** **** **** ' + card.last4}
          />
        </FormControl>
      </div>
      <div className='w-full space-y-1'>
        <label>Card Holder Name</label>
        <FormControl
          sx={{ width: '100%', borderRadius: '24px' }}
          size='medium'
          variant='outlined'
          {...register('cardHolderName')}
        >
          <OutlinedInput id='cardHolderName' name='cardHolderName' aria-describedby='outlined-weight-helper-text' />
        </FormControl>
      </div>
      <div className='flex justify-between w-full'>
        <div className='space-y-2'>
          <label>Expiration Date</label>
          <div className='flex gap-3'>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel id='demo-simple-select-label'>Month</InputLabel>
              <Select
                {...register('expMonth')}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={watch().expMonth}
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
                {...register('expYear')}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={watch().expYear}
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
            {...register('cardCvc')}
            onFocus={onCvvFocus}
            onBlur={onCvvBlur}
          >
            <OutlinedInput id='cardCvc' name='cardCvc' aria-describedby='outlined-weight-helper-text' />
          </FormControl>
        </div>
      </div>
      <button type='submit' className='w-full py-3 text-white bg-primary rounded-2xl hover:bg-primary-500'>
        Submit
      </button>
    </form>
  )
})

export default FormCard

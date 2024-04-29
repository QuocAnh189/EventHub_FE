/* eslint-disable no-unused-vars */
//hook
import { useEffect, useState } from 'react'

//component
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import Slider from '@mui/material/Slider'

//icons
import { IoFilter } from 'react-icons/io5'

function valueText(value: any) {
  return `${value}°C`
}

interface PriceProps {
  price: number
  setCondition: (value: number) => void
}

const Price = (props: PriceProps) => {
  const { price, setCondition } = props

  const [value, setValue] = useState([20, 37])

  const handleChange = (event: any, newValue: any) => {
    console.log(event)
    setCondition(0)
    setValue(newValue)
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-black text-xl font-semibold'>Price</h1>
      </div>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay='auto'
        getAriaValueText={valueText}
      />
      <p className='text-gray500 mt-4'>
        Price:<span className='text-black'> {price}$</span>
      </p>
    </div>
  )
}

const DateFilter = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center justify-between'>
        <h1 className='text-black text-xl font-semibold'>Date</h1>
      </div>
      <div className='flex flex-col items-start'>
        {[0, 1, 2, 3, 4, 5].map(() => (
          <FormControlLabel
            control={<Checkbox checked={true} onChange={() => {}} name='antoine' />}
            label='Enter Filter'
          />
        ))}
      </div>
    </div>
  )
}

const Category = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center justify-between'>
        <h1 className='text-black text-xl font-semibold'>Category</h1>
      </div>
      <div className='flex flex-col items-start'>
        {[0, 1, 2, 3, 4, 5].map(() => (
          <FormControlLabel
            control={<Checkbox checked={true} onChange={() => {}} name='antoine' />}
            label='Enter Filter'
          />
        ))}
      </div>
    </div>
  )
}

const Rate = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center justify-between'>
        <h1 className='text-black text-xl font-semibold'>Rating</h1>
      </div>
      <div className='flex flex-col items-start'>
        {[0, 1, 2, 3, 4, 5].map(() => (
          <FormControlLabel
            control={<Checkbox checked={true} onChange={() => {}} name='antoine' />}
            label='Enter Filter'
          />
        ))}
      </div>
    </div>
  )
}

export const SidebarExplore = () => {
  const [condition, setCondition] = useState({
    category: 'Fresh Fruit',
    price: 30,
    rate: '5.0',
    tag: 'Health'
  })

  useEffect(() => {
    console.log(condition)
  }, [condition.category])

  return (
    <div className='w-1/5 flex flex-col gap-6'>
      <div className='w-1/3 flex items-center justify-around py-2 bg-primary rounded-3xl'>
        <p className='text-white'>Filter</p>
        <IoFilter size='24px' color='white' />
      </div>
      <Price price={condition.price} setCondition={(value) => setCondition({ ...condition, price: value })} />
      <DateFilter />
      <Divider color='#808080' />
      <Category />
      <Divider color='#808080' />
      <Rate />
    </div>
  )
}

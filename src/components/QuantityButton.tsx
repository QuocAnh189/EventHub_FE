import { MouseEventHandler } from 'react'
import { GrSubtract } from 'react-icons/gr'
import { IoAdd } from 'react-icons/io5'

export interface IQuantityButtonProps {
  onIncrease: MouseEventHandler<HTMLButtonElement>
  onDecrease: MouseEventHandler<HTMLButtonElement>
  quantity: number
}

export function QuantityButton({ onIncrease, onDecrease, quantity }: IQuantityButtonProps) {
  return (
    <div className='w-[100px] flex p-1 items-center justify-around border border-solid border-gray300 rounded-3xl'>
      <button
        onClick={onDecrease}
        className='flex items-center justify-center p-[6px] rounded-full bg-primary-200 hover:bg-gray200'
      >
        <GrSubtract color='#333' />
      </button>
      <p className='text-black'>{quantity}</p>
      <button
        onClick={onIncrease}
        className='flex items-center justify-center p-[6px] rounded-full bg-primary-200 hover:bg-primary-300'
      >
        <IoAdd color='#333' />
      </button>
    </div>
  )
}

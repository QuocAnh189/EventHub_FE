/* eslint-disable react-hooks/exhaustive-deps */
//hook
import { useState, useEffect } from 'react'

//component
import Divider from '@mui/material/Divider'
import ActionTicket from './ActionTicket'

interface IProps {
  promotion: number
  ticketTypes: any[]
  setOpenDialog: (value: boolean) => void
}

const Payment = (props: IProps) => {
  const { promotion, ticketTypes, setOpenDialog } = props
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const [promotionPrice, setPromptionPrice] = useState<number>(0)

  useEffect(() => {
    setPromptionPrice(Math.floor(promotion * totalPrice))
  }, [totalPrice])

  return (
    <div className='relative w-1/3 flex flex-col gap-3 bg-primary-100 rounded-md px-4 py-2'>
      <h3 className='text-black text-2xl font-bold mb-4'>Payment Information</h3>

      {ticketTypes.map((ticket, index) => (
        <ActionTicket
          key={`ticket-${index}`}
          ticket={ticket}
          openDialog={() => {
            setOpenDialog(true)
          }}
          updateTotalPrice={(value) => {
            setTotalPrice((pre) => pre + value)
          }}
        />
      ))}

      <Divider className='mt-6 mb-[30px]' />
      <div>
        <div className='flex items-center justify-between '>
          <span className='text-black'>Total Price</span>
          <span className='font-bold text-black'>
            {totalPrice} {totalPrice > 0 ? '000 VNĐ' : 'VND'}
          </span>
        </div>
        <div className='flex items-center justify-between mt-[10px]'>
          <span className='text-black'>Discount</span>
          <span className='font-bold text-black'>
            {promotion}% ({promotionPrice / 100} VND)
          </span>
        </div>
      </div>
      <Divider className='mt-[21px] mb-6' />
      <div className='flex items-center justify-between'>
        <span className='font-bold text-black'>Total Payment</span>
        <span className='text-2xl font-bold text-primary-500'>
          {totalPrice - promotion === 0 ? 'VND' : `${totalPrice - promotion}.000 VND`}
        </span>
      </div>
      <button className='absolute bottom-10 bg-primary text-white left-[50%] translate-x-[-50%] w-4/5 py-2 rounded-sm hover:bg-primary-500'>
        Checkout
      </button>
    </div>
  )
}

export default Payment

import { Button, Divider } from 'antd'
import { ITicketType } from 'interfaces/contents/ticketType'
import { useNavigate } from 'react-router-dom'

interface IProps {
  promotion: number
  ticketTypes: ITicketType[]
}

const Payment = (props: IProps) => {
  const navigate = useNavigate()

  const { promotion, ticketTypes } = props

  return (
    <div className='flex flex-col w-1/3 gap-3 p-6 rounded-md bg-primary-100'>
      <h3 className='mb-4 text-2xl font-bold text-black'>Payment Information</h3>
      <div className='flex flex-col flex-1 gap-4'>
        {ticketTypes.map((type) => (
          <div key={type.id} className='flex justify-between'>
            <span className='font-bold text-black'>{type.name.toUpperCase()}</span>
            {type?.price && type.price > 0 ? (
              <span className='text-black'>{`${type.price}.000 VNĐ`}</span>
            ) : (
              <span className='text-green-darker'>FREE</span>
            )}
          </div>
        ))}
        {promotion && promotion > 0.0 ? (
          <div className='flex justify-between'>
            <span className='font-bold text-black'>DISCOUNT</span>
            <span className='text-rose-700'>{`${promotion * 100} %`}</span>
          </div>
        ) : (
          <></>
        )}
      </div>
      <Divider type='horizontal' />
      <Button
        type='primary'
        size='large'
        onClick={() => navigate('checkout')}
        className='text-white rounded-md !bg-primary hover:!bg-primary-500'
      >
        Checkout
      </Button>
    </div>
  )
}

export default Payment

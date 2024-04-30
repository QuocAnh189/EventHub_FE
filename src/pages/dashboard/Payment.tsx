//component
import ProtectedLayout from '@layouts/protected'
import { PageHeader } from '@layouts/components'
import Invoice from './components/Invoice'
import CardPayment from './components/CardPayment'
import AddCartPayment from './components/AddCardPayment'

const cardsData = [
  {
    cardNumber: '0702465814111111',
    cardHolder: 'TRAN PHUOC ANH QUOC',
    cardMonth: '02',
    cardYear: '2024',
    cardCvv: '1809',
    isCardFlipped: false
  },
  {
    cardNumber: '0702465814111111',
    cardHolder: 'LE THI THU HIEN',
    cardMonth: '02',
    cardYear: '2024',
    cardCvv: '1809',
    isCardFlipped: false
  },
  {
    cardNumber: '0702465814111111',
    cardHolder: 'MAI DINH KHOI',
    cardMonth: '02',
    cardYear: '2024',
    cardCvv: '1809',
    isCardFlipped: true
  }
]

const Payment = () => {
  return (
    <ProtectedLayout>
      <PageHeader title='Billing' />
      <div className='w-full flex'>
        <div className='w-2/3 grid grid-cols-2'>
          {cardsData.map((card: any, id) => (
            <CardPayment key={`card-payment-${id}`} card={card} />
          ))}
          <AddCartPayment />
        </div>
        <div className='w-1/3 '>
          <Invoice />
        </div>
      </div>
    </ProtectedLayout>
  )
}

export default Payment

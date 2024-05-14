//hook
import { useRef, useState } from 'react'

//component
import Modal from '@mui/material/Modal'
import { IBankCard } from 'interfaces/contents'
import Card from './card/Card'
import FormCard from './card/FormCard'

interface Props {
  card: IBankCard
  cardHolderName: string
}

const CardPayment = (props: Props) => {
  const { card, cardHolderName } = props

  const refEdit = useRef()

  const [openModalEdit, setOpenModalEdit] = useState(false)

  const handleOpenFormEdit = () => {
    setOpenModalEdit(true)
  }

  return (
    <>
      <div className='mb-3' onClick={handleOpenFormEdit}>
        <Card
          cardHolder={cardHolderName}
          cardNumber={'**** **** **** ' + card.last4}
          cardMonth={card.expMonth}
          cardYear={card.expYear}
          isCardFlipped={false}
        />
      </div>
      <Modal
        open={openModalEdit}
        onClose={() => setOpenModalEdit(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <FormCard ref={refEdit} card={card} cardHolderName={cardHolderName} />
      </Modal>
    </>
  )
}

export default CardPayment

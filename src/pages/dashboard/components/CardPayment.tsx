//hook
import { useState, useRef } from 'react'

//component
import Card from './card/Card'
import Modal from '@mui/material/Modal'
import FormCard from './card/FormCard'

interface Props {
  card: any
}

const CardPayment = (props: Props) => {
  const { card } = props

  const refEdit = useRef()

  const [openModalEdit, setOpenModalEdit] = useState(false)

  const handleOpenFormEdit = () => {
    setOpenModalEdit(true)
  }

  return (
    <>
      <div className='mb-3' onClick={handleOpenFormEdit}>
        <Card
          cardNumber={card.cardNumber}
          cardHolder={card.cardHolder}
          cardMonth={card.cardMonth}
          cardYear={card.cardYear}
          cardCvv={card.cardCvv}
          isCardFlipped={false}
        />
      </div>
      <Modal
        open={openModalEdit}
        onClose={() => setOpenModalEdit(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <FormCard ref={refEdit} card={card} />
      </Modal>
    </>
  )
}

export default CardPayment

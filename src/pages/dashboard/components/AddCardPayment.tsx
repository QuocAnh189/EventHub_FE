//hook
import { useState, useRef } from 'react'

//component
import Modal from '@mui/material/Modal'

//icon
import { IoMdAdd } from 'react-icons/io'
import FormCard from './card/FormCard'

const InitialCard = { cardNumber: '', cardHolder: '', cardMonth: '', cardYear: '', cardCvv: '', isCardFlipped: false }

const AddCartPayment = () => {
  const refAdd = useRef()
  const [openModalAdd, setOpenModalAdd] = useState(false)
  // const [isCardFlipped, setIsCardFlipped] = useState(false)

  const handleOpenFormAdd = () => {
    setOpenModalAdd(true)
  }

  return (
    <>
      <button
        onClick={handleOpenFormAdd}
        className='card-item flex items-center justify-center border border-dashed border-gray rounded-xl'
      >
        <IoMdAdd size={30} />
        <p className='text-xl font-bold'>Add Payment</p>
      </button>
      <Modal
        open={openModalAdd}
        onClose={() => setOpenModalAdd(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <FormCard ref={refAdd} card={InitialCard} />
      </Modal>
    </>
  )
}

export default AddCartPayment

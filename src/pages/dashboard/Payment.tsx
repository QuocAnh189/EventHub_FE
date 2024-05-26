/* eslint-disable react-hooks/exhaustive-deps */
//component
import { EditOrderModal } from '@components/payment/EditOrderModal'
import { useAppSelector } from '@hooks/useRedux'
import { PageHeader } from '@layouts/components'
import ProtectedLayout from '@layouts/protected'
import { useGetPaymentsByUserIdQuery } from '@redux/services/paymentApi'
import OrdersTable from '@widgets/OrdersTable'
import { IPayment } from 'interfaces/contents/payment'
import { useEffect, useState } from 'react'

const Payment = () => {
  const user = useAppSelector((state) => state.persistedReducer.user.user)

  const { data, isFetching, refetch } = useGetPaymentsByUserIdQuery({ userId: user?.id! })

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [selectedOrder, setSelectedOrder] = useState<IPayment>()

  useEffect(() => {
    refetch()
  }, [])

  console.log(data?.items)

  return (
    <>
      <ProtectedLayout>
        <PageHeader title='My Orders' />
        <OrdersTable
          payments={data?.items || []}
          isLoading={isFetching}
          onClick={(order: any) => {
            setSelectedOrder(order)
            setIsOpenModal(true)
          }}
        />
      </ProtectedLayout>
      {isOpenModal && selectedOrder && (
        <EditOrderModal isModalOpen={isOpenModal} setIsModalOpen={setIsOpenModal} order={selectedOrder} />
      )}
    </>
  )
}

export default Payment

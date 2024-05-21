//component
import { EditOrderModal } from '@components/payment/EditOrderModal'
import { useAppSelector } from '@hooks/useRedux'
import { PageHeader } from '@layouts/components'
import ProtectedLayout from '@layouts/protected'
import { useGetPaymentsByUserIdQuery } from '@redux/services/userApi'
import OrdersTable from '@widgets/OrdersTable'
import { IPayment } from 'interfaces/contents/payment'
import { useEffect, useState } from 'react'

const Payment = () => {
  const user = useAppSelector((state) => state.user.user)

  const { data, isLoading, refetch } = useGetPaymentsByUserIdQuery({ userId: user?.id! })

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [selectedOrder, setSelectedOrder] = useState<IPayment>()

  useEffect(() => {
    refetch()
  }, [])

  return (
    <>
      <ProtectedLayout>
        <PageHeader title='My Orders' />
        <OrdersTable
          payments={data?.items || []}
          isLoading={isLoading}
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

import OrdersInfobox from '@components/OrdersInfobox'
import { EditOrderModal } from '@components/payment/EditOrderModal'
import { StatusModal } from '@components/payment/StatusModal'
import { useAppSelector } from '@hooks/useRedux'
import { useGetPaymentsByCreatorIdQuery } from '@redux/services/paymentApi'
import OrdersAverageRate from '@widgets/OrdersAverageRate'
import OrdersTable from '@widgets/OrdersTable'
import { IPayment } from 'interfaces/contents/payment'
import { useState } from 'react'

export function Orders() {
  const user = useAppSelector((state) => state.user.user)

  const { data, isFetching } = useGetPaymentsByCreatorIdQuery({ creatorId: user?.id! })

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [isOpenStatusModal, setIsOpenStatusModal] = useState<boolean>(false)
  const [selectedOrder, setSelectedOrder] = useState<IPayment>()

  return (
    <>
      <div>
        <div className='w-full grid-cols-1 mb-8 widgets-grid xl:grid-cols-6'>
          <div className='xl:col-span-2'>
            <OrdersAverageRate />
          </div>
          <div className='grid-cols-1 widgets-grid md:grid-cols-2 lg:grid-cols-4 xl:col-span-4'>
            <OrdersInfobox title='Completed' count={2345} icon={<i className='icon-check-to-slot-solid' />} />
            <OrdersInfobox title='Confirmed' count={323} color='green' icon={<i className='icon-list-check-solid' />} />
            <OrdersInfobox title='Canceled' count={17} color='red' icon={<i className='icon-ban-solid' />} />
            <OrdersInfobox
              title='Refunded'
              count={2}
              color='badge-status-bg'
              icon={<i className='icon-rotate-left-solid' />}
            />
          </div>
        </div>
        <OrdersTable
          payments={data?.items || []}
          isLoading={isFetching}
          onClick={(order: IPayment) => {
            setSelectedOrder(order)
            setIsOpenModal(true)
          }}
          onChangeStatus={(order: IPayment) => {
            setSelectedOrder(order)
            setIsOpenStatusModal(true)
          }}
        />
      </div>
      {isOpenModal && selectedOrder && (
        <EditOrderModal isModalOpen={isOpenModal} setIsModalOpen={setIsOpenModal} order={selectedOrder} />
      )}
      {isOpenStatusModal && selectedOrder && (
        <StatusModal isModalOpen={isOpenStatusModal} setIsModalOpen={setIsOpenStatusModal} order={selectedOrder} />
      )}
    </>
  )
}

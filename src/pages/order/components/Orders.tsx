import OrdersInfobox from '@components/OrdersInfobox'
import { useAppSelector } from '@hooks/useRedux'
import { useGetPaymentsByCreatorIdQuery } from '@redux/services/userApi'
import OrdersAverageRate from '@widgets/OrdersAverageRate'
import OrdersTable from '@widgets/OrdersTable'

export function Orders() {
  const user = useAppSelector((state) => state.user.user)

  const { data } = useGetPaymentsByCreatorIdQuery({ creatorId: user?.id! })

  return (
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
      <OrdersTable payments={data?.items || []} />
    </div>
  )
}

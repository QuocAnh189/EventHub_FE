import { PageHeader } from '@layouts/components'
import ProtectedLayout from '@layouts/protected'
import { Tabs } from 'antd'
import { Orders } from './components'
import { PaymentAccounts } from './components/PaymentAcconts'

const TAB_ITEMS = [
  {
    label: 'Orders',
    key: 'ORDERS',
    children: <Orders />
  },
  {
    label: 'Payment Accounts',
    key: 'ACCOUNTS',
    children: <PaymentAccounts />
  }
]

const OrdersPage = () => {
  return (
    <ProtectedLayout>
      <PageHeader title='Orders' />
      <div className='flex flex-col flex-1 gap-5 md:gap-[26px]'>
        {/* <div
          className='w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[26px] lg:grid-cols-4 lg:items-end
                     xl:grid-cols-6'
        >
          <CalendarSelector wrapperClass='lg:max-w-[275px] lg:col-span-2 xl:col-span-4' id='ordersPeriodSelector' />
        </div> */}
      </div>
      <Tabs defaultActiveKey='1' items={TAB_ITEMS} type='card' className='permissions-tabs' />
    </ProtectedLayout>
  )
}

export default OrdersPage

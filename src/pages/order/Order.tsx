// components
import { PageHeader } from '@layouts/components'
import CalendarSelector from '@components/CalendarSelector'
import Select from '@ui/Select'
import OrdersAverageRate from '@widgets/OrdersAverageRate'
import OrdersInfobox from '@components/OrdersInfobox'
import OrdersTable from '@widgets/OrdersTable'

// hooks
import { useState } from 'react'

// constants
import { ORDER_SORT_OPTIONS } from '@constants/options'

const PRODUCT_CATEGORIES = [
  { value: 'all', label: 'All Products' },
  { value: 'electronics', label: 'Electronics', icon: 'icon-laptop-mobile-solid', color: 'accent' },
  { value: 'food', label: 'Groceries', icon: 'icon-burger-soda-solid', color: 'header' },
  { value: 'fashion', label: 'Fashion', icon: 'icon-shirt-solid', color: 'red' },
  { value: 'services', label: 'Services', icon: 'icon-user-gear-solid', color: 'yellow' }
]

const Orders = () => {
  const [category, setCategory] = useState(PRODUCT_CATEGORIES[0])
  const [sort, setSort] = useState(ORDER_SORT_OPTIONS[0])

  return (
    <>
      <PageHeader title='Orders' />
      <div className='flex flex-col flex-1 gap-5 md:gap-[26px]'>
        <div
          className='w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[26px] lg:grid-cols-4 lg:items-end
                     xl:grid-cols-6'
        >
          <CalendarSelector wrapperClass='lg:max-w-[275px] lg:col-span-2 xl:col-span-4' id='ordersPeriodSelector' />
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[26px] md:col-span-2'>
            <Select
              value={category}
              options={PRODUCT_CATEGORIES}
              onChange={setCategory}
              placeholder='Product category'
            />
            <Select value={sort} options={ORDER_SORT_OPTIONS} onChange={setSort} placeholder='Default sorting' />
          </div>
        </div>
        <div className='w-full widgets-grid grid-cols-1 xl:grid-cols-6'>
          <div className='xl:col-span-2'>
            <OrdersAverageRate />
          </div>
          <div className='widgets-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:col-span-4'>
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
        <OrdersTable category={category} sort={sort} />
      </div>
    </>
  )
}

export default Orders

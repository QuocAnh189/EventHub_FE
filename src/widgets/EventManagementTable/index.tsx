// hooks
import { useState } from 'react'
import { usePagination } from '@hooks/usePagination'

// components
import FilterItem from '@ui/FilterItem'
import Select from '@ui/Select'
import CardMyEvent from '@components/event/CardMyEvent'
import Pagination from '@ui/Pagination'

// constants
import {
  EVENT_MANAGEMENT_OPTIONS,
  EVENT_STATUS_OPTIONS,
  EVENT_SELLER_OPTIONS,
  PRODUCT_SELECT_OPTIONS
} from '@constants/options'

// data placeholder
import products_management from '@db/products_management'
import { useAppSelector } from '@hooks/useRedux'
import { ICategory } from 'interfaces/contents/category'
import { IFilterEvent } from '@type/event'

const EventManagement = () => {
  const defaultFilters: IFilterEvent = {
    status: '',
    category: '',
    eventTicketType: ''
  }
  const [category, setCategory] = useState('all')

  const categories = useAppSelector((state) => state.category.categories)

  const [filters, setFilters] = useState(defaultFilters)
  const [selectedAction, setSelectedAction] = useState(null)

  const getQty = (category: string) => {
    if (category === 'all') return products_management.length
    return products_management.filter((product) => product.status === category).length
  }

  const handleFilterSelect = ({ value }: any, name: any) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleApplyFilters = () => {
    console.log(filters)
  }

  const handleClearFilters = () => {
    setFilters(defaultFilters)
  }

  const dataByStatus = () => {
    if (category === 'all') return products_management
    return products_management.filter((product) => product.status === category)
  }

  const pagination = usePagination(dataByStatus(), 4)

  return (
    <div className='flex flex-col flex-1'>
      <div className='flex flex-wrap gap-2 mb-4'>
        <span className='text-header'>Events:</span>
        <div>
          {EVENT_MANAGEMENT_OPTIONS.map((option, index) => (
            <FilterItem
              key={`filter-${index}`}
              text={option.label}
              qty={getQty(option?.value)}
              value={option?.value}
              active={category}
              onClick={setCategory}
            />
          ))}
        </div>
      </div>
      <div className='grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-x-6 xl:grid-cols-6'>
        <Select
          options={EVENT_STATUS_OPTIONS}
          value={filters?.status?.value}
          placeholder='Status'
          onChange={(e) => handleFilterSelect(e, 'status')}
        />
        <Select
          options={categories.map((category: ICategory) => {
            return { value: category.id, label: category.name }
          })}
          value={filters?.category?.value}
          placeholder='Category'
          onChange={(e) => handleFilterSelect(e, 'category')}
        />
        <Select
          options={EVENT_SELLER_OPTIONS}
          value={filters.eventTicketType.value}
          placeholder='Price'
          onChange={(e) => handleFilterSelect(e, 'eventTicketType')}
        />
        <div className='grid grid-cols-2 gap-3'>
          <button className='btn bg-primary text-white !gap-[5px]' onClick={handleApplyFilters}>
            Apply <i className='icon-chevron-right-regular text-sm' />
          </button>
          <button className='btn btn--outline blue !h-[44px]' onClick={handleClearFilters}>
            Clear
          </button>
        </div>
      </div>
      <div className='flex flex-col-reverse gap-4 mt-4 mb-5 md:flex-row md:justify-between md:items-end md:mt-5 md:mb-6'>
        <p>View events: {pagination.showingOf()}</p>
        <div className='md:min-w-[280px]'>
          <Select
            options={PRODUCT_SELECT_OPTIONS}
            value={selectedAction}
            placeholder='Select Action'
            onChange={(e) => setSelectedAction(e)}
          />
        </div>
      </div>
      <div className='flex flex-col gap-[22px]'>
        {/* {width >= 768 ? (
          <StyledTable
            columns={PRODUCTS_MANAGEMENT_COLUMN_DEFS}
            dataSource={pagination.currentItems()}
            rowKey={(record) => record.sku}
            locale={{
              emptyText: <Empty text='No products found' />
            }}
            rowSelection={{
              type: 'checkbox'
            }}
            pagination={false}
          />
        ) : (
          <div className='flex flex-col gap-5'>
            {pagination.currentItems().map((product: any, index: any) => (
              <EventManagementCollapseItem
                key={`event-${index}`}
                product={product}
                handleCollapse={handleCollapse}
                activeCollapse={activeCollapse}
              />
            ))}
          </div>
        )} */}
        <div className='w-full grid grid-cols-2 gap-10'>
          <CardMyEvent />
          <CardMyEvent />
          <CardMyEvent />
          <CardMyEvent />
        </div>
        {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
      </div>
    </div>
  )
}

export default EventManagement

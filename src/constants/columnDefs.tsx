// components
import Counter from '@components/Counter'
import RatingStars from '@ui/RatingStars'
import SubmenuTrigger from '@ui/SubmenuTrigger'
import Timestamp from '@ui/Timestamp'
import Trend from '@ui/Trend'
import { NavLink } from 'react-router-dom'

// utils
import { getStatusColor, numFormatter } from '@utils/helpers'
import dayjs from 'dayjs'

export const ORDERS_COLUMN_DEFS: any = [
  {
    title: '# order',
    dataIndex: 'orderNumber',
    width: '100px',
    render: (text: any) => <span className='subheading-2'>#{text}</span>
  },
  {
    title: 'Event',
    dataIndex: 'product',
    className: 'product-cell',
    render: (product: any) => (
      <div className='flex gap-6'>
        <div className='img-wrapper w-[70px] h-[64px] flex items-center justify-center shrink-0'>
          <img src={product.image} alt={product.name} />
        </div>
        <div className='flex-col hidden 2xl:flex'>
          <h5 className='text-sm max-w-[195px] mb-1.5'>{product.name}</h5>
          <div className='flex flex-col gap-1 text-sm'>
            <p>Regular price: ${product.regular_price}</p>
            {product.sale_price && <p>Sale price: ${product.sale_price}</p>}
          </div>
        </div>
      </div>
    ),
    responsive: ['lg']
  },
  {
    title: 'Ticket',
    dataIndex: 'ticket'
  },
  {
    title: 'Category',
    dataIndex: 'category',
    responsive: ['lg']
  },
  {
    title: 'Payment',
    dataIndex: 'payment',
    render: (payment: any) => {
      const status =
        payment.amount === payment.received
          ? 'Fully paid'
          : payment.amount > payment.received && payment.received !== 0
          ? 'Partially paid'
          : 'Unpaid'

      return (
        <div className='flex flex-col'>
          <span className='font-bold font-heading text-header'>
            {status !== 'Fully paid' && `$${payment.received} / from `}${payment.amount}
          </span>
          <span>{status}</span>
        </div>
      )
    }
  },
  {
    title: 'Order Status',
    dataIndex: 'status',
    render: (status: any) => (
      <span className='badge-status badge-status--lg' style={{ backgroundColor: `var(--${getStatusColor(status)})` }}>
        {status}
      </span>
    )
  },
  {
    title: 'Rate',
    dataIndex: 'rating',
    render: (rating: any) => <RatingStars rating={rating} />,
    responsive: ['xl']
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    width: '70px',
    render: () => (
      <div className='flex items-center justify-end gap-11'>
        <NavLink to='/product-editor' aria-label='Edit'>
          <i className='text-lg leading-none icon icon-pen-to-square-regular' />
        </NavLink>
        <SubmenuTrigger />
      </div>
    )
  }
]

export const TRANSACTIONS_COLUMN_DEFS = [
  {
    title: 'Date & Time',
    dataIndex: 'timestamp',
    render: (timestamp: any) => <Timestamp date={timestamp} />
  },
  {
    title: 'Seller',
    dataIndex: 'seller',
    render: (record: any) => {
      return (
        <>
          {record.seller ? (
            <div className='flex items-center gap-[18px]'>
              <div className='img-wrapper w-[60px] h-[60px] flex items-center justify-center shrink-0'>
                <img className='max-w-[50px]' src={record.seller.logo} alt={record.seller.name} />
              </div>
              <span className='hidden truncate lg:inline'>{record.seller.name}</span>
            </div>
          ) : (
            'N/A'
          )}
        </>
      )
    }
  },
  {
    title: 'SKU',
    dataIndex: 'sku',
    responsive: ['lg']
  },
  {
    title: 'Method',
    dataIndex: 'method',
    responsive: ['xxl']
  },
  {
    title: 'Type',
    dataIndex: 'type',
    render: (type: any) => <span className='capitalize'>{type}</span>
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (status: any) => (
      <span className='badge-status' style={{ backgroundColor: `var(--${getStatusColor(status)})` }}>
        {status}
      </span>
    )
  },
  {
    title: 'Country',
    dataIndex: 'country',
    responsive: ['xxl']
  },
  {
    title: 'Curr',
    dataIndex: 'currency',
    responsive: ['xl']
  },
  {
    title: 'Fee',
    dataIndex: 'fee',
    responsive: ['xl']
  },
  {
    title: 'Tax',
    dataIndex: 'tax',
    responsive: ['xl']
  },
  {
    title: 'Total',
    dataIndex: 'total',
    render: (record: any) => {
      const total = record.fee - (record.fee / 100) * record.tax

      return <span className='font-semibold font-heading text-header'>${total.toFixed(2)}</span>
    }
  }
]

export const SELLERS_COLUMN_DEFS = [
  {
    title: 'Seller',
    dataIndex: 'seller',
    render: (record: any) => (
      <div className='flex gap-[26px]'>
        <div className='img-wrapper flex items-center justify-center w-[63px] h-[63px] shrink-0'>
          <img className='max-w-[50px]' src={record.logo} alt={record.name} />
        </div>
        <div className='flex flex-col items-start'>
          <a className='subheading-2' href={record.website} target='_blank' rel='noreferrer'>
            www.website.com
          </a>
          <a className='mt-3 mb-2.5' href={`tel:${record.phone}`}>
            {record.phone}
          </a>
          <a href={`mailto:${record.email}`}>{record.email}</a>
        </div>
      </div>
    )
  },
  {
    title: 'Orders value',
    dataIndex: 'ordersValue',
    render: () => (
      <div className='flex flex-col'>
        <Counter className='h3' num={65874} />
        <span className='label-text mt-0.5 mb-2.5'>New orders</span>
        <Trend value={55.96} />
      </div>
    ),
    responsive: ['lg']
  },
  {
    title: 'Income value',
    dataIndex: 'incomeValue',
    render: () => (
      <div className='flex flex-col'>
        <Counter className='h3' num={23000} prefix='$' isFormatted />
        <span className='label-text mt-0.5 mb-2.5'>Income</span>
        <Trend value={14.56} />
      </div>
    ),
    responsive: ['lg']
  },
  {
    title: 'Review rate',
    dataIndex: 'rating',
    render: (rating: any) => <RatingStars rating={rating} />
  },
  {
    title: 'Sales categories value',
    dataIndex: 'salesCategoriesValue',
    render: (record: any) => (
      <div className='flex flex-col gap-2.5 max-w-[220px]'>
        <div className='flex justify-between text-sm font-bold font-heading'>
          <span>Electronics</span>
          <span className='text-right text-header'>{numFormatter(record.profit.electronics, 2, '$')}</span>
        </div>
        <div className='flex justify-between text-sm font-bold font-heading'>
          <span>Fashion</span>
          <span className='text-right text-header'>{numFormatter(record.profit.fashion, 2, '$')}</span>
        </div>
        <div className='flex justify-between text-sm font-bold font-heading'>
          <span>Food & Drinks</span>
          <span className='text-right text-header'>{numFormatter(record.profit.food, 2, '$')}</span>
        </div>
        <div className='flex justify-between text-sm font-bold font-heading'>
          <span>Services</span>
          <span className='text-right text-header'>{numFormatter(record.profit.services, 2, '$')}</span>
        </div>
      </div>
    ),
    responsive: ['xl']
  },
  {
    title: 'Other',
    dataIndex: 'other',
    render: () => (
      <div className='flex items-center justify-end gap-5'>
        <button aria-label='Edit'>
          <i className='text-lg leading-none icon icon-pen-to-square-regular' />
        </button>
        <SubmenuTrigger />
      </div>
    )
  }
]

export const PRODUCTS_MANAGEMENT_COLUMN_DEFS: any = [
  {
    title: (
      <div className='flex items-center justify-center'>
        <i className='icon-image-regular text-[26px]' />
      </div>
    ),
    dataIndex: 'image',
    width: 45,
    render: (image: any) => (
      <div className='img-wrapper w-[45px] h-[45px] flex items-center justify-center'>
        <img src={image} alt='product' />
      </div>
    )
  },
  {
    title: 'Product name',
    dataIndex: 'name',
    render: (text: any) => <span className='inline-block h6 !text-sm max-w-[155px]'>{text}</span>
  },
  { title: 'SKU', dataIndex: 'sku' },
  {
    title: 'Stock',
    dataIndex: 'stock',
    width: 130,
    render: (stock: any) => (
      <div className='flex items-center gap-5'>
        {stock == null ? (
          'On Demand'
        ) : (
          <span>
            <span className={`${stock !== 0 ? 'text-green' : 'text-red'}`}>
              {stock !== 0 ? (stock >= 10 ? 'In stock ' : 'Low Inventory ') : 'Out of stock '}
            </span>
            ({stock})
          </span>
        )}
      </div>
    )
  },
  {
    title: 'Price',
    dataIndex: 'price',
    render: (price: any) => <span>${price ? price.toFixed(2) : '0.00'}</span>
  },
  {
    title: 'Category',
    dataIndex: 'category',
    render: (category: any) => <button className='capitalize text-accent'>{category}</button>,
    responsive: ['xxl']
  },
  {
    title: 'Type',
    dataIndex: 'type',
    render: (type: any) => <span className='capitalize'>{type}</span>,
    responsive: ['lg']
  },
  {
    title: 'Statistics',
    dataIndex: 'statistics',
    render: (statistics: any) => <span className='capitalize'>{statistics || '-'}</span>,
    responsive: ['xl']
  },
  {
    title: 'Tags',
    dataIndex: 'tags',
    width: 125,
    render: (tags: any) => (
      <div className='flex flex-wrap gap-x-0.5'>
        {tags && tags.length
          ? tags.map((tag: any, index: any) => (
              <button className='capitalize tag text-accent' key={tag}>
                {tag}
                {index !== tags.length - 1 && ','}
              </button>
            ))
          : '-'}
      </div>
    ),
    responsive: ['xl']
  },
  {
    title: 'Rate',
    dataIndex: 'rateCount',
    render: (rateCount: any) => (
      <div className='flex items-center gap-2'>
        <i className={`icon icon-star-${rateCount !== 0 ? 'solid' : 'regular'} text-lg leading-none`} />
        {rateCount !== 0 && <span className='mt-1'>({rateCount})</span>}
      </div>
    ),
    responsive: ['xl']
  },
  {
    title: 'Date',
    dataIndex: 'date',
    render: (date: any) => (
      <div className='flex flex-col'>
        <span>Last modified:</span>
        <span className='font-bold text-header'>{date && dayjs(date).format('DD/MM/YYYY')}</span>
      </div>
    ),
    responsive: ['lg']
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    render: () => (
      <div className='flex items-center justify-end gap-11'>
        <NavLink to='/product-editor' aria-label='Edit'>
          <i className='text-lg leading-none icon icon-pen-to-square-regular' />
        </NavLink>
        <SubmenuTrigger />
      </div>
    )
  }
]

// components
import { PageHeader } from '@layouts/components'
import TopSalesByCategories from '@widgets/TopSalesByCategories'
import TopRetail from '@widgets/TopRetail'
import TopEventsByCategories from '@widgets/TopEventsList'

const TopEvent = () => {
  return (
    <>
      <PageHeader title='Top Events' />
      <div className='widgets-grid grid-cols-1 lg:!gap-10 xl:mb-[50px]'>
        <div
          className='widgets-grid grid-cols-1 xl:grid-cols-[minmax(0,330px)_minmax(0,1fr)]
                    2xl:grid-cols-6'
        >
          <TopSalesByCategories />
          <TopRetail />
        </div>
        <div className='widgets-grid grid-cols-1 lg:grid-cols-2'>
          <TopEventsByCategories category='Game' />
          <TopEventsByCategories category='Music' />
        </div>
        <div className='widgets-grid grid-cols-1 lg:grid-cols-2'>
          <TopEventsByCategories category='Carrer' />
          <TopEventsByCategories category='Sport' />
        </div>
      </div>
    </>
  )
}

export default TopEvent

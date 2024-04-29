// components
import { PageHeader } from '@layouts/components'
import EventProfilePreview from '@widgets/EventProfilePreview'
import TransactionsInfobox from '@widgets/TransactionsInfobox'
import SaleActivity from '@widgets/SaleActivity'
import SalesProfitByCategory from '@widgets/SalesProfitByCategory'
import PeriodSalesRevenue from '@widgets/PeriodSalesRevenue'
import EventProfileInfobox from '@components/EventProfileInfobox'
import WalletBadge from '@widgets/WalletBadge'

// hooks
import { useWindowSize } from 'react-use'

// assets
import credit from '@assets/dashboard/credit-card.webp'
import wallet from '@assets/dashboard/wallet.webp'
import ProtectedLayout from '@layouts/protected'

const Boxes = ({ wrapperClass }: any) => {
  return (
    <div className={`grid w-full grid-cols-1 gap-5 md:grid-cols-3 md:gap-[26px] ${wrapperClass || ''}`}>
      <EventProfileInfobox value={23400} label='Income' />
      <EventProfileInfobox icon='barcode' color='green' value={234} label='New Orders' withCurrency={false} />
      <EventProfileInfobox icon='tax' color='red' value={123} label='Expense' />
    </div>
  )
}

const EventAnalysisDetail = () => {
  const { width } = useWindowSize()

  return (
    <ProtectedLayout>
      <PageHeader title='Seller Profile Details' />
      <div className='widgets-grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-6'>
        <EventProfilePreview />
        <TransactionsInfobox />
        <div className='widgets-grid grid-cols-1 md:col-span-3 md:grid-cols-2'>
          <SaleActivity />
          <div className='widgets-grid grid-cols-1'>
            <WalletBadge label='Total Expense' value={32100} image={credit} />
            <WalletBadge label='Total Profit' value={144100} image={wallet} />
          </div>
        </div>
        <div className='widgets-grid grid-cols-1 md:col-span-3 lg:grid-cols-2 2xl:col-span-6'>
          <PeriodSalesRevenue />
          <div className='widgets-grid grid-cols-1'>
            <SalesProfitByCategory />
            {(width < 1024 || width >= 1440) && <Boxes />}
          </div>
        </div>
        {width >= 1024 && width < 1440 && <Boxes wrapperClass='col-span-3' />}
      </div>
    </ProtectedLayout>
  )
}

export default EventAnalysisDetail

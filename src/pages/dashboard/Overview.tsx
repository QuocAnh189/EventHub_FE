// components
import { PageHeader } from '@layouts/components'
import MainProfileInfo from '@widgets/MainProfileInfo'
import SalesStats from '@widgets/SalesStats'
import TotalReport from '@widgets/TotalReport'
import TotalBalance from '@components/TotalBalance'

// hooks
import { useWindowSize } from 'react-use'
import ProtectedLayout from '@layouts/protected'

const Overview = () => {
  const { width } = useWindowSize()

  return (
    <ProtectedLayout>
      <PageHeader title='Overview' />
      <div className='widgets-grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-[minmax(0,_951px)_minmax(0,_1fr)]'>
        <MainProfileInfo />
        {width >= 1536 && <TotalBalance />}
        <SalesStats />
        <TotalReport />
      </div>
    </ProtectedLayout>
  )
}

export default Overview

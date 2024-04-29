// components
import { PageHeader } from '@layouts/components'
import CustomerRetentionRate from '@widgets/CustomerRetentionRate'
import DemographicSegmentation from '@widgets/DemographicSegmentation'
import ConversionRate from '@widgets/ConversionRate'
import CustomersInfobox from '@components/CustomersInfobox'
import ProtectedLayout from '@layouts/protected'

const Customers = () => {
  return (
    <ProtectedLayout>
      <PageHeader title='Customers' />
      <div className='widgets-grid grid-cols-1 xl:grid-cols-6'>
        <div className='widgets-grid grid-cols-1 md:grid-cols-3 xl:col-span-3'>
          <CustomersInfobox count={32987} color='green' suffix='' />
          <CustomersInfobox label='New' count={17153} suffix='' iconClass='user-plus-solid' />
          <CustomersInfobox label='Regular' count={7587} suffix='' color='red' iconClass='user-group-crown-solid' />
        </div>
        <ConversionRate />
        <CustomerRetentionRate />
        <DemographicSegmentation />
      </div>
    </ProtectedLayout>
  )
}

export default Customers

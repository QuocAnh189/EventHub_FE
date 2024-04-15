// components
import { PageHeader } from '@layouts/components'
import ProductEditor from '@widgets/EventEditor'

const CreateEvent = () => {
  return (
    <div className='min-h-screen'>
      <PageHeader title='Event Creator' />
      <ProductEditor />
    </div>
  )
}

export default CreateEvent

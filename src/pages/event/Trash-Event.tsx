//components
import { PageHeader } from '@layouts/components'
import ProtectedLayout from '@layouts/protected'
import EventManagementTrash from '@widgets/EventManagementTrash'

const TrashEvent = () => {
  return (
    <ProtectedLayout>
      <div className='min-h-screen'>
        <PageHeader title='Trash Event' />
        <EventManagementTrash />
      </div>
    </ProtectedLayout>
  )
}

export default TrashEvent

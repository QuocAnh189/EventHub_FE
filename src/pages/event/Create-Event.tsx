import ProtectedLayout from '@layouts/protected'
import ModifyEvent from '@pages/common/Modify-Create-Event'

const CreateEvent = () => {
  return (
    <ProtectedLayout>
      <ModifyEvent title='Create Event' create={true} />
    </ProtectedLayout>
  )
}

export default CreateEvent

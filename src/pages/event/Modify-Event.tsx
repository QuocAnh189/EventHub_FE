//page
import ModifyEvent from '@pages/common/Modify-Create-Event'

//component
import ProtectedLayout from '@layouts/protected'

const EditEvent = () => {
  return (
    <ProtectedLayout>
      <ModifyEvent title='Modify Event' />
    </ProtectedLayout>
  )
}

export default EditEvent

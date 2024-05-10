//hook
import { useParams } from 'react-router-dom'

//page
import ModifyEvent from '@pages/common/Modify-Create-Event'

//component
import ProtectedLayout from '@layouts/protected'
import { Loader } from '@components/Loader'

//redux
import { useGetEventByIdQuery } from '@redux/services/eventApi'

const EditEvent = () => {
  const { id } = useParams()

  const { data: event, isFetching } = useGetEventByIdQuery(id!)

  return (
    <ProtectedLayout>
      {isFetching ? (
        <div>
          <Loader />
        </div>
      ) : (
        <ModifyEvent title='Modify Event' event={event!} />
      )}
    </ProtectedLayout>
  )
}

export default EditEvent

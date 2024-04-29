// components
import { PageHeader } from '@layouts/components'
import ProtectedLayout from '@layouts/protected'
import EventAnalysisGrid from '@widgets/EventAnalysisGrid'

const EventAnalysis = () => {
  return (
    <ProtectedLayout>
      <PageHeader title='Event Analysis' />
      <EventAnalysisGrid />
    </ProtectedLayout>
  )
}

export default EventAnalysis

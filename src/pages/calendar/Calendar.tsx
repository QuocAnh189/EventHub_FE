//hook
import { useNavigate } from 'react-router-dom'

// components
import { PageHeader } from '@layouts/components'
import Box from '@mui/material/Box'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'

//i18
import { withTranslation } from 'react-i18next'
import ProtectedLayout from '@layouts/protected'

//redux
import { useGetEventsQuery } from '@redux/services/eventApi'

//constant
import { EEventStatus } from '@constants/enum'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

const Calendar = ({ t }: any) => {
  const navigate = useNavigate()
  const { data: events } = useGetEventsQuery({ takeAll: false, type: EEventStatus.UPCOMING, size: 6 })

  const [eventCalendar, setEvenCalendar] = useState([])
  const handleEventClick = (selected: any) => {
    navigate(`/organization/event/${selected.event._def.publicId}`)
  }

  useEffect(() => {
    if (events) {
      const formatEvents = events?.items.map((item: any) => {
        return {
          id: item.id,
          title: item.name,
          coverImage: item.coverImage,
          date: dayjs(item.startTime).format('YYYY-MM-DD').toString(),
          status: item.status
        }
      })
      setEvenCalendar(formatEvents)
    }
  }, [events])

  return (
    <ProtectedLayout>
      <Box m='20px'>
        <PageHeader title={t('header.title')} />
        <Box display='flex' justifyContent='space-between'>
          <Box flex='1 1 100%' ml='15px'>
            <FullCalendar
              height='75vh'
              plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin, listPlugin]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,listMonth'
              }}
              initialView='dayGridMonth'
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              eventClick={handleEventClick}
              eventContent={renderEventContent}
              // initialEvents={eventCalendar}
              events={eventCalendar}
            />
          </Box>
        </Box>
      </Box>
    </ProtectedLayout>
  )
}

function renderEventContent(eventInfo: any) {
  const statusEvent = (status: EEventStatus) => {
    switch (status) {
      case EEventStatus.CLOSED:
        return 'red'
      case EEventStatus.OPENING:
        return 'orange'
      case EEventStatus.UPCOMING:
        return 'green'
      default:
        break
    }
  }
  return (
    <div className={`flex items-center gap-2 bg-${statusEvent(eventInfo.event._def.extendedProps.status)}`}>
      <img src={eventInfo.event._def.extendedProps.coverImage} className='w-10 h-10 rounded-md' />
      <p className='text-white truncate'>{eventInfo.event.title}</p>
    </div>
  )
}

export default withTranslation('calendar')(Calendar)

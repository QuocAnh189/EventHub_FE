//hook
import { useState } from 'react'

//component
import { PageHeader } from '@layouts/components'
import { Box, List, Typography } from '@mui/material'
import TransactionsInfobox from '@widgets/TransactionsInfobox'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([])

  const handleDateClick = (selected: any) => {
    const title = prompt('Please enter a new title for your event')
    const calendarApi = selected.view.calendar
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
      })
    }
  }

  const handleEventClick = (selected: any) => {
    if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
      selected.event.remove()
    }
  }

  return (
    <Box m='20px'>
      <PageHeader title='Calendar' />
      <Box display='flex' justifyContent='space-between'>
        <Box flex='1 1 20%' p='15px' borderRadius='4px'>
          <Typography variant='h5'>Events</Typography>
          <List className='flex flex-col gap-4'>
            {currentEvents.map((item, index) => (
              <TransactionsInfobox item={item} key={index} />
            ))}
          </List>
        </Box>

        <Box flex='1 1 100%' ml='15px'>
          <FullCalendar
            height='75vh'
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events: any) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: '12315',
                title: 'All-day event',
                date: '2024-04-01'
              },
              {
                id: '5123',
                title: 'Timed event',
                date: '2024-04-02'
              }
            ]}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Calendar

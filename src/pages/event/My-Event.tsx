// components
import { PageHeader } from '@layouts/components'
import Search from '@ui/Search'
import { CSVLink } from 'react-csv'
import EventManagement from '@widgets/EventManagementTable'

//route
import { useNavigate } from 'react-router-dom'
import ProtectedLayout from '@layouts/protected'

const csvData = [
  ['firstname', 'lastname', 'email'],
  ['John', 'Doe', 'johndoe@domain.com'],
  ['Jane', 'Doe', 'janedoe@domain.com']
]

const MyEvent = () => {
  const navigate = useNavigate()

  return (
    <ProtectedLayout>
      <div className='min-h-screen'>
        <PageHeader title='My Event' />
        <div className='flex flex-col-reverse gap-4 mb-5 md:flex-col lg:flex-row lg:justify-between'>
          <div className='flex flex-col gap-4 md:flex-row md:gap-[14px]'>
            <button
              onClick={() => {
                navigate('/organization/event/create-event')
              }}
              className='btn btn--primary'
            >
              Add new event <i className='icon-circle-plus-regular' />
            </button>
            <CSVLink className='btn btn--outline blue !h-[44px]' data={csvData}>
              Export CSV <i className='icon-file-export-solid' />
            </CSVLink>
          </div>
          <Search wrapperClass='lg:w-[326px]' placeholder='Search Event' />
        </div>
        <EventManagement />
      </div>
    </ProtectedLayout>
  )
}

export default MyEvent

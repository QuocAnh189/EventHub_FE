import { Route } from 'interfaces'
import { IoHomeOutline } from 'react-icons/io5'
import { MdDashboard } from 'react-icons/md'
import { MdEventAvailable } from 'react-icons/md'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { MdOutlinePreview } from 'react-icons/md'
import { MdOutlineReport } from 'react-icons/md'
import { MdMenuBook } from 'react-icons/md'
import { BiHelpCircle } from 'react-icons/bi'
import { IoSettingsOutline } from 'react-icons/io5'

const ROUTES: Route[] = [
  {
    name: 'Home',
    icon: <IoHomeOutline size={20} />,
    path: '/organization'
  },
  {
    name: 'Dashboard',
    icon: <MdDashboard size={20} />,
    links: [
      { name: 'Overview', path: '/organization/dashboard/overview' },
      { name: 'Event Analysis', path: '/organization/dashboard/event-analysis' },
      { name: 'Category Analysis', path: '/organization/dashboard/category-analysis' },
      { name: 'Customer', path: '/organization/dashboard/customer' },
      { name: 'Payment', path: '/organization/dashboard/payment' },
      { name: 'Ticket Sales', path: '/organization/dashboard/ticket-sale' }
    ]
  },
  {
    name: 'Event',
    icon: <MdEventAvailable size={20} />,
    links: [
      { name: 'Top Events', path: '/organization/event/top-event' },
      { name: 'My Events', path: '/organization/event/my-event' },
      { name: 'Create Event', path: '/organization/event/create-event' },
      { name: 'My Tickets', path: '/organization/event/my-ticket' }
    ]
  },
  {
    name: 'Calendar',
    icon: <FaRegCalendarAlt size={20} />,
    path: '/organization/calendar'
  },
  {
    name: 'Orders',
    icon: <MdMenuBook size={20} />,
    path: '/organization/order'
  },
  {
    name: 'Reviews',
    icon: <MdOutlinePreview size={20} />,
    path: '/organization/review'
  },
  {
    name: 'Report',
    icon: <MdOutlineReport size={20} />,
    path: '/organization/report'
  },
  {
    name: 'Help',
    icon: <BiHelpCircle size={20} />,
    path: '/organization/help'
  },
  {
    name: 'Settings',
    icon: <IoSettingsOutline size={20} />,
    links: [
      { name: 'Profile', path: '/organization/settings/profile' },
      { name: 'Connected Apps', path: '/organization/settings/connect' }
    ]
  }
]

export default ROUTES

const ROUTES = [
  {
    name: 'Home',
    icon: 'rectangle-history-circle-user-regular',
    path: '/organization'
  },
  {
    name: 'Dashboard',
    icon: 'rectangle-history-circle-user-regular',
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
    icon: 'boxes-stacked-regular',
    links: [
      { name: 'Top Events', path: '/organization/event/top-event' },
      { name: 'My Events', path: '/organization/event/my-event' },
      { name: 'Create Event', path: '/organization/event/create-event' },
      { name: 'My Tickets', path: '/organization/event/my-ticket' }
    ]
  },
  {
    name: 'Calendar',
    icon: 'chart-simple-regular',
    path: '/organization/calendar'
  },
  {
    name: 'Orders',
    icon: 'cart-shopping-regular',
    path: '/organization/order'
  },
  {
    name: 'Reviews',
    icon: 'star-half-stroke-solid',
    path: '/organization/review'
  },
  {
    name: 'Report',
    icon: 'money-check-dollar-pen-regular',
    path: '/organization/report',
    qty: 279
  },
  {
    name: 'Help',
    icon: 'money-check-dollar-pen-regular',
    path: '/organization/help',
    qty: 279
  },
  {
    name: 'Settings',
    icon: 'gear-regular',
    links: [
      { name: 'Profile', path: '/organization/settings/profile' },
      { name: 'Connected Apps', path: '/organization/settings/connect' }
    ]
  }
]

export default ROUTES

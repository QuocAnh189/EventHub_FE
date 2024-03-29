const ROUTES = [
  {
    name: 'Home',
    icon: 'rectangle-history-circle-user-regular'
  },
  {
    name: 'Dashboard',
    icon: 'rectangle-history-circle-user-regular',
    links: [
      { name: 'Overview', path: '/' },
      { name: 'Event Analysis', path: '/sellers-list' },
      { name: 'Category Analysis', path: '/sellers-table' },
      { name: 'Customer', path: '/sellers-grid' },
      { name: 'Payment', path: '/seller-profile' },
      { name: 'Ticket Sales', path: '/revenue-by-period' }
    ]
  },
  {
    name: 'Event',
    icon: 'boxes-stacked-regular',
    links: [
      { name: 'Top Events', path: '/top-products' },
      { name: 'My Events', path: '/products-grid' },
      { name: 'Create Event', path: '/products-management' },
      { name: 'My Tickets', path: '/product-editor' }
    ]
  },
  {
    name: 'Calendar',
    icon: 'chart-simple-regular',
    path: '/statistics'
  },
  {
    name: 'Orders',
    icon: 'cart-shopping-regular',
    path: '/orders'
  },
  {
    name: 'Reviews',
    icon: 'star-half-stroke-solid',
    path: '/reviews'
  },
  {
    name: 'Report',
    icon: 'money-check-dollar-pen-regular',
    path: '/transactions',
    qty: 279
  },
  {
    name: 'Help',
    icon: 'money-check-dollar-pen-regular',
    path: '/transactions',
    qty: 279
  },
  {
    name: 'Settings',
    icon: 'gear-regular',
    links: [
      { name: 'Profile', path: '/home/profile' },
      { name: 'Connected Apps', path: '/connected-apps' }
    ]
  }
]

export default ROUTES

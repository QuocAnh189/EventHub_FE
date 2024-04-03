import { faker } from '@faker-js/faker'

const notifications = [
  {
    id: 'notification-1',
    timestamp: faker.date.recent(),
    category: 'order',
    subcategory: 'Offers',
    text: 'joined to discount program',
    user: {
      firstName: 'J.',
      lastName: 'Davidson',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    }
  },
  {
    id: 'notification-2',
    timestamp: faker.date.recent(),
    category: 'follow',
    subcategory: 'Referral link',
    text: 'created new account by email',
    user: {
      firstName: 'Mark',
      lastName: 'Dowers',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    }
  },
  {
    id: 'notification-3',
    timestamp: faker.date.recent(),
    category: 'follow',
    subcategory: 'Referral link',
    text: 'created new account by email',
    user: {
      firstName: 'Parker',
      lastName: 'Johnson',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    }
  },
  {
    id: 'notification-4',
    timestamp: faker.date.recent(),
    category: 'order',
    subcategory: 'Electronics',
    text: 'leaved a new review',
    user: {
      firstName: 'Mary',
      lastName: 'Wilson',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    }
  },
  {
    id: 'notification-5',
    timestamp: faker.date.recent(),
    category: 'order',
    subcategory: 'Electronics',
    text: 'sent a request for refund',
    user: {
      firstName: 'Helen',
      lastName: 'Miller',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    }
  },
  {
    id: 'notification-6',
    timestamp: faker.date.recent(),
    category: 'follow',
    subcategory: 'Subscriptions',
    text: 'started following you',
    user: {
      firstName: 'Victor',
      lastName: 'Stevens',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    }
  },
  {
    id: 'notification-7',
    timestamp: faker.date.past(),
    category: 'follow',
    subcategory: 'Subscriptions',
    text: 'started following you',
    user: {
      firstName: 'Rita',
      lastName: 'Fisher',
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    }
  }
]

export default notifications

import { faker } from '@faker-js/faker'

const messages = [
  {
    id: 'message-1',
    content: faker.lorem.paragraph(),
    createdAt: faker.date.recent(),
    sender: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    archived: false
  },
  {
    id: 'message-2',
    content: faker.lorem.paragraph(),
    createdAt: faker.date.recent(),
    sender: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    archived: false
  },
  {
    id: 'message-3',
    content: faker.lorem.paragraph(),
    createdAt: faker.date.recent(),
    sender: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    archived: false
  },
  {
    id: 'message-4',
    content: faker.lorem.paragraph(),
    createdAt: faker.date.past(),
    sender: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    archived: true
  },
  {
    id: 'message-5',
    content: faker.lorem.paragraph(),
    createdAt: faker.date.past(),
    sender: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    archived: true
  },
  {
    id: 'message-6',
    content: faker.lorem.paragraph(),
    createdAt: faker.date.past(),
    sender: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    archived: false
  },
  {
    id: 'message-7',
    content: faker.lorem.paragraph(),
    createdAt: faker.date.past(),
    sender: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    archived: false
  },
  {
    id: 'message-8',
    content: faker.lorem.paragraph(),
    createdAt: faker.date.past(),
    sender: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    archived: false
  },
  {
    id: 'message-9',
    content: faker.lorem.paragraph(),
    createdAt: faker.date.past(),
    sender: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    archived: true
  },
  {
    id: 'message-10',
    content: faker.lorem.paragraph(),
    createdAt: faker.date.past(),
    sender: {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      avatar: 'https://res.cloudinary.com/dadvtny30/image/upload/v1710062870/portfolio/frj9fscqteb90eumokqj.jpg'
    },
    archived: true
  }
]

export default messages

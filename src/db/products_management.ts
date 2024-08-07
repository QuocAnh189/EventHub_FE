import { faker } from '@faker-js/faker'

const products_management = [
  {
    sku: 'TR-001',
    image: '',
    name: 'Xiaomi WiFI Repeater Pro',
    stock: 120,
    price: 254,
    category: 'electronics',
    type: 'simple',
    statistics: 'best seller',
    tags: ['top rated', 'best seller', 'phone'],
    rateCount: 0,
    date: faker.date.past(),
    status: 'publish'
  },
  {
    sku: 'TR-002',
    image: '',
    name: 'Logi Wireless Keyboard',
    stock: 3,
    price: 117,
    category: 'electronics',
    type: 'variable',
    statistics: 'top rated',
    tags: [],
    rateCount: 4,
    date: faker.date.past(),
    status: 'publish'
  },
  {
    sku: 'TR-003',
    image: '',
    name: 'Spry Chewing Gum 100 Pack Mint',
    stock: 0,
    price: 12.3,
    category: 'food & drinks',
    type: 'grouped',
    statistics: 'new in',
    tags: [],
    rateCount: 0,
    date: faker.date.past(),
    status: 'publish'
  },
  {
    sku: 'TR-004',
    image: '',
    name: 'Delivery box package',
    price: 9.99,
    category: 'services',
    type: 'service',
    statistics: 'featured',
    tags: ['top rated', 'best seller', 'phone'],
    rateCount: 3,
    date: faker.date.past(),
    status: 'trash'
  },
  {
    sku: 'TR-005',
    image: '',
    name: 'Traum Signature Graffiti Hat',
    stock: 345,
    price: 120.35,
    category: 'fashion',
    type: 'simple',
    rateCount: 0,
    date: faker.date.past(),
    status: 'draft'
  },
  {
    sku: 'TR-006',
    image: '',
    name: 'Ferrero Rocher 16 Pack Special',
    stock: 0,
    price: 504,
    category: 'food & drinks',
    type: 'simple',
    tags: ['food', 'sweets', 'gifts'],
    rateCount: 0,
    date: faker.date.past(),
    status: 'draft'
  },
  {
    sku: 'TR-007',
    image: '',
    name: 'ELITE LCD Display Liquid CPU Cooler',
    stock: 0,
    price: 99.99,
    category: 'electronics',
    type: 'simple',
    statistics: 'best seller',
    rateCount: 0,
    date: faker.date.past(),
    status: 'draft'
  },
  {
    sku: 'TR-008',
    image: '',
    name: 'Acer GVB708 15" Laptop Silver',
    stock: 2,
    price: 117,
    category: 'electronics',
    type: 'variable',
    statistics: 'top rated',
    tags: [],
    rateCount: 4,
    date: faker.date.past(),
    status: 'trash'
  },
  {
    sku: 'TR-009',
    image: '',
    name: 'Oculus Quest 2 VR Headset',
    stock: 9,
    price: 299,
    category: 'electronics',
    type: 'variable',
    statistics: 'top rated',
    tags: ['VR', 'Meta', 'Oculus', 'Gaming'],
    rateCount: 4,
    date: faker.date.past(),
    status: 'publish'
  },
  {
    sku: 'TR-010',
    image: '',
    name: 'Pergale Picks Strawberry 1kg',
    stock: 354,
    price: 12.3,
    category: 'food & drinks',
    type: 'grouped',
    statistics: 'new in',
    tags: [],
    rateCount: 0,
    date: faker.date.past(),
    status: 'publish'
  },
  {
    sku: 'TR-011',
    image: '',
    name: 'Skittles Fruitty Family Pack',
    stock: 0,
    price: 9.99,
    category: 'food & drinks',
    type: 'grouped',
    statistics: 'featured',
    tags: ['top rated', 'best seller', 'sweets'],
    rateCount: 3,
    date: faker.date.past(),
    status: 'publish'
  },
  {
    sku: 'TR-012',
    image: '',
    name: 'Yumi Sunny Yellow City Backpack',
    stock: 98,
    price: 120.35,
    category: 'fashion',
    type: 'simple',
    rateCount: 0,
    date: faker.date.past(),
    status: 'draft'
  },
  {
    sku: 'TR-013',
    image: '',
    name: 'UPS Express Shipping',
    price: 9.99,
    category: 'services',
    type: 'service',
    statistics: 'featured',
    tags: [],
    rateCount: 3,
    date: faker.date.past(),
    status: 'trash'
  },
  {
    sku: 'TR-014',
    image: '',
    name: 'SNSY Fancy Red Woman Sandals',
    stock: 0,
    price: 58.72,
    category: 'fashion',
    type: 'simple',
    tags: ['top rated', 'best seller', 'shoes'],
    rateCount: 3,
    date: faker.date.past(),
    status: 'draft'
  },
  {
    sku: 'TR-015',
    image: '',
    name: 'Nintendo Switch Gaming Console',
    stock: 874,
    price: 299,
    category: 'electronics',
    type: 'variable',
    statistics: 'top rated',
    tags: ['Nintendo', 'Gaming', 'Console'],
    rateCount: 4,
    date: faker.date.past(),
    status: 'publish'
  },
  {
    sku: 'TR-016',
    image: '',
    name: 'ARTLINE Overlord Gaming PC',
    stock: 7,
    price: 497,
    category: 'electronics',
    type: 'variable',
    statistics: 'top rated',
    tags: ['Gaming', 'PC', 'Computer'],
    rateCount: 4,
    date: faker.date.past(),
    status: 'trash'
  }
]

export default products_management

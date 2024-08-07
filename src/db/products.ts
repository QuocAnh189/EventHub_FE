const products = [
  {
    id: 'product-1',
    name: 'Oculus Quest 2 VR Headset 64 GB',
    img: '',
    category: 'electronics',
    in_stock: 1548,
    sold: 274,
    regular_price: 600,
    sale_price: 559,
    rating: 4.5
  },
  {
    id: 'product-2',
    name: 'Nintendo Switch Gaming Console',
    img: '',
    category: 'electronics',
    in_stock: 566,
    sold: 414,
    regular_price: 499,
    sale_price: 399,
    rating: 5
  },
  {
    id: 'product-3',
    name: 'Xiaomi WiFI Repeater Pro',
    img: '',
    category: 'electronics',
    in_stock: 2471,
    sold: 366,
    regular_price: 199,
    sale_price: 159,
    rating: 4.5
  },
  {
    id: 'product-4',
    name: 'AMD Ryzen 7 5700X Processor Zen 3',
    img: '',
    category: 'electronics',
    in_stock: 102,
    sold: 1923,
    regular_price: 300,
    sale_price: 289,
    rating: 4
  },
  {
    id: 'product-5',
    name: 'Aorus Radeon RX 6750 XT GPU',
    img: '',
    category: 'electronics',
    in_stock: 27,
    sold: 662,
    regular_price: 620,
    sale_price: 599,
    rating: 5
  },
  {
    id: 'product-6',
    name: 'Xbox Series X Gaming Console',
    img: '',
    category: 'electronics',
    in_stock: 1006,
    sold: 19874,
    regular_price: 599,
    sale_price: 579,
    rating: 5
  },
  {
    id: 'product-7',
    name: 'Logi Wireless Keyboard',
    img: '',
    category: 'electronics',
    in_stock: 5,
    sold: 15,
    regular_price: 199,
    sale_price: 149,
    rating: 3.5
  },
  {
    id: 'product-8',
    name: 'ARTLINE Overlord Gaming PC',
    img: '',
    category: 'electronics',
    in_stock: 95,
    sold: 118,
    regular_price: 1199,
    sale_price: 1099,
    rating: 4.5
  },
  {
    id: 'product-9',
    name: 'ARTLINE Samurai Gaming PC',
    img: '',
    category: 'electronics',
    in_stock: 21,
    sold: 7,
    regular_price: 3599,
    sale_price: 3499,
    rating: 5
  },
  {
    id: 'product-10',
    name: 'PlayStation 5 Gaming Console',
    img: '',
    category: 'electronics',
    in_stock: 202,
    sold: 58741,
    regular_price: 699,
    sale_price: 599,
    rating: 5
  },
  {
    id: 'product-11',
    name: 'SteamDeck Gaming Console 64 GB',
    img: '',
    category: 'electronics',
    in_stock: 369,
    sold: 22941,
    regular_price: 499,
    sale_price: 449,
    rating: 5
  },
  {
    id: 'product-12',
    name: 'A4 Naraka Gaming Pro Keyboard',
    img: '',
    category: 'electronics',
    in_stock: 2,
    sold: 651,
    regular_price: 189,
    sale_price: 139,
    rating: 3.5
  },
  {
    id: 'product-13',
    name: 'Triple Camera - Infrared Night Vision',
    img: '',
    category: 'electronics',
    in_stock: 19,
    sold: 46,
    regular_price: 199,
    sale_price: 149,
    rating: 4
  },
  {
    id: 'product-14',
    name: 'iPhone 13 Pro Max 512 GB Silver',
    img: '',
    category: 'electronics',
    in_stock: 95,
    sold: 118,
    regular_price: 1199,
    sale_price: 1099,
    rating: 4.5
  },
  {
    id: 'product-15',
    name: 'Reference Premiere Monitor Speakers',
    img: '',
    category: 'electronics',
    in_stock: 502,
    sold: 217,
    regular_price: 89,
    sale_price: 69,
    rating: 3
  },
  {
    id: 'product-16',
    name: 'ELITE LCD Display Liquid CPU Cooler',
    img: '',
    category: 'electronics',
    in_stock: 6641,
    sold: 20053,
    regular_price: 600,
    sale_price: 569,
    rating: 4.5
  },
  {
    id: 'product-17',
    name: 'Smart Watches Sport Edition',
    img: '',
    category: 'electronics',
    in_stock: 361,
    sold: 80,
    regular_price: 239,
    sale_price: 199,
    rating: 4
  },
  {
    id: 'product-18',
    name: 'iPhone 12 Pro Max 512 GB Silver',
    img: '',
    category: 'electronics',
    in_stock: 1152,
    sold: 10802,
    regular_price: 1199,
    sale_price: 1099,
    rating: 4.5
  },
  {
    id: 'product-19',
    name: 'iPhone 13 Pro Max 512 GB Gold',
    img: '',
    category: 'electronics',
    in_stock: 5221,
    sold: 36874,
    regular_price: 1199,
    sale_price: 1099,
    rating: 5
  },
  {
    id: 'product-20',
    name: 'HTC VIVE Pro 2 VR Headset - 99HASW ',
    img: '',
    category: 'electronics',
    in_stock: 362,
    sold: 292,
    regular_price: 119,
    sale_price: 99,
    rating: 4
  },
  {
    id: 'product-21',
    name: 'Samsung Odyssey G9 27" QHD',
    img: '',
    category: 'electronics',
    in_stock: 995,
    sold: 10452,
    regular_price: 499,
    sale_price: 449,
    rating: 3.5
  },
  {
    id: 'product-22',
    name: 'HiPad Max 10.36" Screen Qualcomm',
    img: '',
    category: 'electronics',
    in_stock: 16,
    sold: 258,
    regular_price: 499,
    sale_price: 399,
    rating: 4
  },
  {
    id: 'product-23',
    name: 'Quadcopter UAV with 4K Camera',
    img: '',
    category: 'electronics',
    in_stock: 0,
    sold: 3471,
    regular_price: 399,
    sale_price: 389,
    rating: 4.5
  },
  {
    id: 'product-24',
    name: 'Acer GVB708 15" Laptop Silver',
    img: '',
    category: 'electronics',
    in_stock: 52,
    sold: 954,
    regular_price: 1599,
    sale_price: 1499,
    rating: 4
  },
  {
    id: 'product-25',
    name: 'Egoiste Arabica Coffee Beans 1kg',
    img: '',
    category: 'food',
    in_stock: 465,
    sold: 1544,
    regular_price: 19.99,
    sale_price: 17.99,
    rating: 5
  },
  {
    id: 'product-26',
    name: 'Coca Cola 330ml Can 24 Pack',
    img: '',
    category: 'food',
    in_stock: 10025,
    sold: 265874,
    regular_price: 9.99,
    sale_price: 8.99,
    rating: 5
  },
  {
    id: 'product-27',
    name: 'Spry Chewing Gum 100 Pack Mint',
    img: '',
    category: 'food',
    in_stock: 8014,
    sold: 9845,
    regular_price: 1.99,
    sale_price: 1.69,
    rating: 5
  },
  {
    id: 'product-28',
    name: 'Monster Energy The Doctor 12 Pack',
    img: '',
    category: 'food',
    in_stock: 10025,
    sold: 265874,
    regular_price: 9.99,
    sale_price: 8.99,
    rating: 5
  },
  {
    id: 'product-29',
    name: 'Evian Mineral Water 24 Pack 500ml',
    img: '',
    category: 'food',
    in_stock: 117,
    sold: 20045,
    regular_price: 19.99,
    sale_price: 18.99,
    rating: 5
  },
  {
    id: 'product-30',
    name: 'Shweppes Lemon 375ml 24 Pack',
    img: '',
    category: 'food',
    in_stock: 561,
    sold: 15231,
    regular_price: 9.99,
    sale_price: 8.99,
    rating: 4.5
  },
  {
    id: 'product-31',
    name: 'Dolce Gusto Cappuccino 16 Pack',
    img: '',
    category: 'food',
    in_stock: 566,
    sold: 6622,
    regular_price: 19.99,
    sale_price: 18.99,
    rating: 4
  },
  {
    id: 'product-32',
    name: 'BeGood Foods Black Quinoa 500g',
    img: '',
    category: 'food',
    in_stock: 482,
    sold: 19,
    regular_price: 5.99,
    sale_price: 3.99,
    rating: 5
  },
  {
    id: 'product-33',
    name: 'Nordic Oats Gluten Free 1kg Bag',
    img: '',
    category: 'food',
    in_stock: 6418,
    sold: 9841,
    regular_price: 3.99,
    sale_price: 2.99,
    rating: 3
  },
  {
    id: 'product-34',
    name: 'Jacobs Milka Instant Coffee 500g',
    img: '',
    category: 'food',
    in_stock: 365,
    sold: 24,
    regular_price: 3.99,
    sale_price: 2.99,
    rating: 5
  },
  {
    id: 'product-35',
    name: 'Goodwill Sanca Olive Oil 5L',
    img: '',
    category: 'food',
    in_stock: 488,
    sold: 236,
    regular_price: 29.99,
    sale_price: 27.99,
    rating: 2.5
  },
  {
    id: 'product-36',
    name: 'Pergale Picks Strawberry 1kg',
    img: '',
    category: 'food',
    in_stock: 66,
    sold: 82,
    regular_price: 3.99,
    sale_price: 2.99,
    rating: 4.5
  },
  {
    id: 'product-37',
    name: 'Skittles Fruitty Family Pack',
    img: '',
    category: 'food',
    in_stock: 564,
    sold: 1584,
    regular_price: 9.99,
    sale_price: 8.99,
    rating: 5
  },
  {
    id: 'product-38',
    name: 'Jelly Bean Assortment Cup',
    img: '',
    category: 'food',
    in_stock: 966,
    sold: 405,
    regular_price: 6.99,
    sale_price: 3.99,
    rating: 4
  },
  {
    id: 'product-39',
    name: 'M&M Peanut Chocolate 1kg',
    img: '',
    category: 'food',
    in_stock: 625,
    sold: 2591,
    regular_price: 2.99,
    sale_price: 0.99,
    rating: 5
  },
  {
    id: 'product-40',
    name: 'Guylian Seashells Belgian Chocolate',
    img: '',
    category: 'food',
    in_stock: 3614,
    sold: 201,
    regular_price: 7.99,
    sale_price: 4.99,
    rating: 5
  },
  {
    id: 'product-41',
    name: 'Chocolat de Napoleon Truffles',
    img: '',
    category: 'food',
    in_stock: 703,
    sold: 211,
    regular_price: 9.99,
    sale_price: 8.99,
    rating: 5
  },
  {
    id: 'product-42',
    name: 'Ferrero Rocher 16 Pack Special',
    img: '',
    category: 'food',
    in_stock: 3605,
    sold: 1452,
    regular_price: 39.99,
    sale_price: 28.99,
    rating: 5
  },
  {
    id: 'product-43',
    name: 'Levis Issue Backpack Black',
    img: '',
    category: 'fashion',
    in_stock: 105,
    sold: 987,
    regular_price: 100,
    sale_price: 59,
    rating: 4.5
  },
  {
    id: 'product-44',
    name: 'SNSY Fancy Red Woman Sandals',
    img: '',
    category: 'fashion',
    in_stock: 12,
    sold: 81,
    regular_price: 52,
    sale_price: 39,
    rating: 3
  },
  {
    id: 'product-45',
    name: 'Levis 1998 Classic Red Hoodie',
    img: '',
    category: 'fashion',
    in_stock: 188,
    sold: 15,
    regular_price: 100,
    sale_price: 79,
    rating: 5
  },
  {
    id: 'product-46',
    name: 'Traum Signature Graffiti Hat',
    img: '',
    category: 'fashion',
    in_stock: 5,
    sold: 254,
    regular_price: 32,
    sale_price: 10,
    rating: 4
  },
  {
    id: 'product-47',
    name: 'Traum So Color Yellow Umbrella',
    img: '',
    category: 'fashion',
    in_stock: 2547,
    sold: 5581,
    regular_price: 5,
    sale_price: 4,
    rating: 5
  },
  {
    id: 'product-48',
    name: 'Puma Ocean Colors City Backpack',
    img: '',
    category: 'fashion',
    in_stock: 987,
    sold: 551,
    regular_price: 150,
    sale_price: 129,
    rating: 4.5
  },
  {
    id: 'product-49',
    name: 'Classic Black Sneakers Unisex',
    img: '',
    category: 'fashion',
    in_stock: 5874,
    sold: 2584,
    regular_price: 100,
    sale_price: 79,
    rating: 5
  },
  {
    id: 'product-50',
    name: 'Crocs Pastels Unicorn Dreams',
    img: '',
    category: 'fashion',
    in_stock: 941,
    sold: 668,
    regular_price: 150,
    sale_price: 119,
    rating: 4.5
  },
  {
    id: 'product-51',
    name: 'Puma Crossbody Bag Black',
    img: '',
    category: 'fashion',
    in_stock: 147,
    sold: 79,
    regular_price: 50,
    sale_price: 30,
    rating: 4
  },
  {
    id: 'product-52',
    name: 'Yumi Sunny Yellow City Backpack',
    img: '',
    category: 'fashion',
    in_stock: 552,
    sold: 347,
    regular_price: 99,
    sale_price: 69,
    rating: 4.5
  },
  {
    id: 'product-53',
    name: 'Guess Black Leather Bag for woman',
    img: '',
    category: 'fashion',
    in_stock: 202,
    sold: 17,
    regular_price: 268,
    sale_price: 199,
    rating: 4
  },
  {
    id: 'product-54',
    name: 'Parfois Woman Flower Backpack',
    img: '',
    category: 'fashion',
    in_stock: 498,
    sold: 112,
    regular_price: 395,
    sale_price: 300,
    rating: 2.5
  },
  {
    id: 'product-55',
    name: 'UPS Express Shipping',
    img: '',
    category: 'services',
    in_stock: 202,
    sold: 17,
    regular_price: 268,
    sale_price: 199,
    rating: 5
  },
  {
    id: 'product-56',
    name: 'Gift cards, loyalty cards and offers',
    img: '',
    category: 'services',
    in_stock: 100,
    sold: 154,
    regular_price: 99,
    sale_price: 1.99,
    rating: 5
  },
  {
    id: 'product-57',
    name: 'Sustainable packaging services',
    img: '',
    category: 'services',
    in_stock: 15874,
    sold: 22987,
    regular_price: 3.99,
    sale_price: 0.99,
    rating: 5
  },
  {
    id: 'product-58',
    name: 'UPS Express Shipping',
    img: '',
    category: 'services',
    in_stock: 202,
    sold: 17,
    regular_price: 268,
    sale_price: 199,
    rating: 5
  },
  {
    id: 'product-59',
    name: 'Gift cards, loyalty cards and offers',
    img: '',
    category: 'services',
    in_stock: 100,
    sold: 154,
    regular_price: 99,
    sale_price: 1.99,
    rating: 5
  },
  {
    id: 'product-60',
    name: 'Sustainable packaging services',
    img: '',
    category: 'services',
    in_stock: 15874,
    sold: 22987,
    regular_price: 3.99,
    sale_price: 0.99,
    rating: 5
  }
]

export default products

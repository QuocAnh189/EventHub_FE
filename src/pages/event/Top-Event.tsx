// components
import { PageHeader } from '@layouts/components'
import TopSalesByCategories from '@widgets/TopSalesByCategories'
import TopRetail from '@widgets/TopRetail'
import TopEventsByCategories from '@widgets/TopEventsList'
import ProtectedLayout from '@layouts/protected'

const TopEvent = () => {
  const categories = [
    {
      color: 'orange',
      iconImage:
        'https://eventhubazureblobstorage.blob.core.windows.net/files/categories/music.png?sp=r&st=2024-04-07T03:49:58Z&se=2025-04-07T11:49:58Z&spr=https&sv=2022-11-02&sr=b&sig=rY0M%2FbUszfOfWAcehEarOJGL4jwcRlL9E1GTthcfKQY%3D',
      id: '99221b77-a6b9-4593-81ba-2fb14bdb7d1a',
      name: 'Music'
    },
    {
      color: 'red',
      iconImage:
        'https://eventhubazureblobstorage.blob.core.windows.net/files/categories/food-and-drink.png?sp=r&st=2024-04-07T03:48:46Z&se=2025-04-07T11:48:46Z&spr=https&sv=2022-11-02&sr=b&sig=LL42HfnOHw%2FZAu3pjNHecbZgEOcr6Geva7K%2B4WztJUY%3D',
      id: 'b57547e1-86e2-4133-a196-5904f80cf673',
      name: 'Food & Drink'
    },
    {
      color: 'yellow',
      iconImage:
        'https://eventhubazureblobstorage.blob.core.windows.net/files/categories/fashion.png?sp=r&st=2024-04-07T03:47:56Z&se=2025-04-07T11:47:56Z&spr=https&sv=2022-11-02&sr=b&sig=KYJ5gPT8LUycfqmw5aRhYIV%2BgS4Z919qqd3UdBKY3Fs%3D',
      id: 'acf0ac38-4e32-4456-b519-0ac009e4da1a',
      name: 'Fashion'
    },
    {
      color: 'gray',
      iconImage:
        'https://eventhubazureblobstorage.blob.core.windows.net/files/categories/music.png?sp=r&st=2024-04-07T03:49:58Z&se=2025-04-07T11:49:58Z&spr=https&sv=2022-11-02&sr=b&sig=rY0M%2FbUszfOfWAcehEarOJGL4jwcRlL9E1GTthcfKQY%3D',
      id: '8ab53d26-742c-4515-8a8f-a5e2a5b86403',
      name: 'Music'
    }
  ]

  return (
    <ProtectedLayout>
      <PageHeader title='Top Events' />
      <div className='widgets-grid grid-cols-1 lg:!gap-10 xl:mb-[50px]'>
        <div
          className='widgets-grid grid-cols-1 xl:grid-cols-[minmax(0,330px)_minmax(0,1fr)]
                    2xl:grid-cols-6'
        >
          <TopSalesByCategories categories={categories} />
          <TopRetail categories={categories} />
        </div>
        <div className='widgets-grid grid-cols-1 lg:grid-cols-2'>
          <TopEventsByCategories category={categories[0]} />
          <TopEventsByCategories category={categories[1]} />
        </div>
        <div className='widgets-grid grid-cols-1 lg:grid-cols-2'>
          <TopEventsByCategories category={categories[2]} />
          <TopEventsByCategories category={categories[3]} />
        </div>
      </div>
    </ProtectedLayout>
  )
}

export default TopEvent

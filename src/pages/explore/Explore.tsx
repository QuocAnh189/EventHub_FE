/* eslint-disable react-hooks/exhaustive-deps */
//hook
import { useEffect, useState } from 'react'
import { usePagination } from '@hooks/usePagination'
import { useForm } from 'react-hook-form'

//components
import { PageHeader } from '@layouts/components'
import EventCardExplore from '@components/EventCardExplore'
import SidebarExplore from '@components/SidebarExplore'
import Search from '@ui/Search'
import Select from '@ui/Select'
import Pagination from '@ui/Pagination'

//redux
import { useGetEventsQuery } from '@redux/services/eventApi'

//interfaces
import { IMetadataEventReponse, initParamsEvent } from '@type/event'
import { IEvent } from 'interfaces/contents/event'
import NotData from '@components/NotData'
import { Loader } from '@components/Loader'

const ExploreScreen = () => {
  const { watch, setValue } = useForm({
    defaultValues: initParamsEvent
  })

  const { data, isFetching, refetch } = useGetEventsQuery(watch())

  useEffect(() => {
    setValue('page', 1)
    // refetch()
  }, [watch().type, watch().search, watch().categoryIds, watch().order, watch().priceRange?.startRange])

  useEffect(() => {
    refetch()
  }, [watch().page])

  const [meta, setMeta] = useState<IMetadataEventReponse>()
  const [events, setEvents] = useState<IEvent[]>([])

  useEffect(() => {
    if (data) {
      setMeta(data.metadata)
      setEvents(data?.items)
    }
  }, [data])

  const pagination = usePagination(meta?.totalPublic, initParamsEvent.size)

  useEffect(() => {
    setValue('page', pagination.currentPage)
  }, [pagination.currentPage])

  return (
    <div className='w-full'>
      <PageHeader title='Explore' />
      <form className='flex gap-8 py-8'>
        <SidebarExplore watch={watch} setValue={setValue} />
        <div className='relative flex flex-1 flex-col items-center mb-10'>
          <div className='w-full flex items-center justify-between pb-4'>
            <div className='flex items-center gap-2'>
              <p className='text-gray500 inline-block text-header'>Sort: </p>
              <Select
                options={[
                  { value: 'ASC', label: 'ASC' },
                  { value: 'DESC', label: 'DESC' }
                ]}
                onChange={(value: any) => {
                  setValue('order', value.value)
                }}
              />
            </div>

            <Search
              wrapperClass='lg:w-[326px]'
              placeholder='Search Event'
              onChange={(query: string) => {
                setValue('search', query)
              }}
            />
          </div>

          {isFetching && (
            <div className='relative w-full h-[300px] flex items-center justify-center'>
              <Loader />
            </div>
          )}

          {!isFetching &&
            (events.length !== 0 ? (
              <div className='w-full grid grid-cols-2 gap-8 grid-rows-5'>
                {events.map((event, index) => (
                  <EventCardExplore key={`event-${index}`} event={event} />
                ))}
              </div>
            ) : (
              <div className='relative w-full h-[300px] flex items-center justify-center'>
                <NotData />
              </div>
            ))}

          <div className='absolute w-full -bottom-20 left-0 right-0 flex items-center justify-center'>
            {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
          </div>
        </div>
      </form>
    </div>
  )
}

export default ExploreScreen

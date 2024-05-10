/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-redeclare */
/* eslint-disable no-case-declarations */
/* eslint-disable no-duplicate-case */
// hooks
import { useCallback, useEffect, useState } from 'react'
import { usePagination } from '@hooks/usePagination'

// components
import FilterItem from '@ui/FilterItem'
import Select from '@ui/Select'
import CardMyEvent from '@components/event/CardMyEvent'
import Pagination from '@ui/Pagination'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import ConfirmDialog from '@components/Dialog'
import Search from '@ui/Search'
import NotData from '@components/NotData'

// constants
import {
  EVENT_MANAGEMENT_OPTIONS,
  EVENT_STATUS_OPTIONS,
  EVENT_SELLER_OPTIONS,
  EVENT_SELECT_OPTIONS,
  IOptionSelect
} from '@constants/options'
import { EEventAction, EEventPrivacy } from '@constants/enum'

// data placeholder
import { useAppSelector } from '@hooks/useRedux'

// interface
import { ICategory } from 'interfaces/contents/category'

// types
import { IFilterEvent, IMetadataEventReponse, IParamsEvent } from '@type/event'
import { initFilterEvent, initParamsMyEvent } from '@type/event'

//redux
import { RootState } from '@redux/store'
import {
  useMoveEventPublicMutation,
  useMoveEventPrivateMutation,
  useMoveEventTrashMutation,
  useDeleteEventsMutation
} from '@redux/services/eventApi'
import { useGetEventsByUserIdQuery } from '@redux/services/userApi'
import { IEvent } from 'interfaces/contents/event'
import { Loader } from '@components/Loader'

const EventManagement = () => {
  const categories = useAppSelector((state: RootState) => state.category.categories)
  const user = useAppSelector((state: RootState) => state.user.user)

  const [fetchFilter, setFetchFilter] = useState<IParamsEvent>(initParamsMyEvent)

  const {
    data,
    isSuccess,
    isFetching: fetchingEvents,
    refetch
  } = useGetEventsByUserIdQuery({
    userId: user?.id!,
    params: fetchFilter
  })

  const [movePublicEvent, { isLoading: loadingPublic }] = useMoveEventPublicMutation()
  const [movePrivateEvent, { isLoading: loadingPrivate }] = useMoveEventPrivateMutation()
  const [moveTrashEvent, { isLoading: loadingTrash }] = useMoveEventTrashMutation()
  const [moveDeleteEvent, { isLoading: loadingDelete }] = useDeleteEventsMutation()

  const [metadata, setMetadata] = useState<IMetadataEventReponse>()
  const [events, setEvents] = useState<IEvent[]>([])
  const [category, setCategory] = useState<EEventPrivacy>(EEventPrivacy.ALL)

  const [checkedAll, setCheckedAll] = useState<boolean>(false)
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [filters, setFilters] = useState<IFilterEvent>(initFilterEvent)
  const [selectedAction, setSelectedAction] = useState<EEventAction>()
  const [eventIds, setEventIds] = useState<string[]>([])

  const dataByStatus = useCallback(() => {
    if (category === 'ALL') return metadata?.totalCount
    if (category === 'PUBLIC') return metadata?.totalPublic
    if (category === 'PRIVATE') return metadata?.totalPrivate
    if (category === 'TRASH') return metadata?.totalTrash
  }, [metadata?.totalCount, metadata?.totalPublic, metadata?.totalPrivate, metadata?.totalTrash, category])

  useEffect(() => {
    if (data) {
      setEvents(data.items)
      setMetadata(data.metadata)
    }
  }, [data])

  const pagination = usePagination(dataByStatus(), 4)

  useEffect(() => {
    setFetchFilter({ ...fetchFilter, page: pagination.currentPage, eventPrivacy: category })
  }, [pagination.currentPage, category])

  const getQty = (category: string) => {
    switch (category) {
      case 'ALL':
        return metadata?.totalCount

      case 'PUBLIC':
        return metadata?.totalPublic

      case 'PRIVATE':
        return metadata?.totalPrivate

      case 'TRASH':
        return metadata?.totalTrash
      default:
        break
    }
  }

  const handleFilterSelect = ({ value, label }: IOptionSelect, name: string) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: { value, label }
    }))
  }

  const handleApplyFilters = () => {
    setFetchFilter({ ...fetchFilter, type: filters.status?.value, categoryIds: filters.category.value })
  }

  const handleSelectAction = (e: any) => {
    setOpenDialog(true)
    switch (e.label) {
      case 'Move to publics':
        setSelectedAction(EEventAction.PUBLIC)
        break

      case 'Move to privates':
        setSelectedAction(EEventAction.PRIVATE)
        break

      case 'Move to Trash':
        setSelectedAction(EEventAction.TRASH)
        break

      case 'Delete Permanently':
        setSelectedAction(EEventAction.DELETE)
        break
      default:
        break
    }
  }

  const handleChecked = (id: string) => {
    if (eventIds.includes(id)) {
      const newEventIds = eventIds.filter((eventId) => eventId !== id)
      setEventIds(newEventIds)
    } else {
      setEventIds([...eventIds, id])
    }
  }

  const handleAction = async () => {
    switch (selectedAction) {
      case EEventAction.PUBLIC:
        {
          const result = await movePublicEvent(eventIds).unwrap()
          if (result) {
            console.log(result)
          }
        }
        break

      case EEventAction.PRIVATE:
        {
          const result = await movePrivateEvent(eventIds).unwrap()
          if (result) {
            console.log(result)
          }
        }
        break

      case EEventAction.TRASH:
        {
          const result = await moveTrashEvent(eventIds).unwrap()
          if (result) {
            console.log(result)
          }
        }
        break

      case EEventAction.DELETE:
        {
          const result = await moveDeleteEvent(eventIds).unwrap()
          if (result) {
            console.log(result)
          }
        }
        break
      default:
        break
    }
  }

  const handleDeleteEvents = (id: string | string[]) => {
    const newEvents = events.filter((event) => event.id !== id)
    if (!newEvents.length) {
      setFetchFilter({ ...fetchFilter, page: pagination.maxPage - 1 })
      pagination.prev()
    }
    setEvents(newEvents)
    refetch()
  }

  return (
    <div className='flex flex-col flex-1'>
      <div className='flex flex-wrap gap-2 mb-4'>
        <span className='text-header'>Events:</span>
        <div>
          {EVENT_MANAGEMENT_OPTIONS.map((option, index: number) => (
            <FilterItem
              key={`filter-${index}`}
              text={option.label!}
              qty={getQty(option?.value)!}
              value={option?.value}
              active={category}
              onClick={setCategory}
            />
          ))}
        </div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-x-6 xl:grid-cols-6'>
          <Select
            options={EVENT_STATUS_OPTIONS}
            value={filters?.status}
            placeholder='Status'
            onChange={(e: IOptionSelect) => handleFilterSelect(e, 'status')}
          />
          <Select
            options={categories.map((category: ICategory) => {
              return { value: category.id, label: category.name }
            })}
            value={filters?.category}
            placeholder='Category'
            onChange={(e: IOptionSelect) => handleFilterSelect(e, 'category')}
          />
          <Select
            options={EVENT_SELLER_OPTIONS}
            value={filters.eventTicketType}
            placeholder='Price'
            onChange={(e: any) => handleFilterSelect(e, 'eventTicketType')}
          />
          <div className='grid grid-cols-2 gap-3'>
            <button className='btn bg-primary flex text-white !gap-[5px]' onClick={handleApplyFilters}>
              Filter
            </button>
            <button
              className='btn btn--outline blue !h-[44px]'
              onClick={() => {
                setFilters(initFilterEvent)
              }}
            >
              Clear
            </button>
          </div>
        </div>
        <Search
          wrapperClass='lg:w-[326px]'
          placeholder='Search Event'
          onChange={(query: string) => {
            setFetchFilter({ ...fetchFilter, search: query })
          }}
        />
      </div>
      <div className='flex flex-col-reverse gap-4 mt-4 mb-5 md:flex-row md:justify-between md:items-end md:mt-5 md:mb-6'>
        <p className='text-header'>View events: {pagination.showingOf()}</p>
        <div className='md:min-w-[280px]'>
          <Select
            options={EVENT_SELECT_OPTIONS.filter((item) => item.value !== category)}
            placeholder='Select Action'
            onChange={handleSelectAction}
          />
        </div>
      </div>

      {events.length !== 0 && (
        <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
          <FormControlLabel
            sx={{ '& .MuiFormControlLabel-label': { color: 'var(--header)' } }}
            control={
              <Checkbox
                sx={{ color: 'var(--header)' }}
                checked={checkedAll}
                onChange={() => {
                  setCheckedAll(!checkedAll)
                }}
              />
            }
            label='Select all'
          />
        </FormGroup>
      )}

      {fetchingEvents && <Loader />}

      {events.length !== 0 && (
        <div className='flex flex-col gap-[22px]'>
          <div className='w-full grid grid-cols-2 gap-10'>
            {events?.map((event, index) => (
              <CardMyEvent
                key={`event-${index}`}
                event={event}
                checkedAll={checkedAll}
                onChecked={handleChecked}
                handleDeleteEvents={handleDeleteEvents}
              />
            ))}
          </div>
          {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
        </div>
      )}

      {isSuccess && events.length === 0 && <NotData text='No event here' />}

      {openDialog && (
        <ConfirmDialog
          title={`Action Event`}
          description={`Are you sure want ${selectedAction} these events`}
          open={openDialog}
          setOpen={(value) => {
            setOpenDialog(value)
          }}
          action='Ok'
          onHandle={handleAction}
          disabled={loadingPublic || loadingPrivate || loadingTrash || loadingDelete}
        />
      )}
    </div>
  )
}

export default EventManagement

{
  /* {width >= 768 ? (
          <StyledTable
            columns={PRODUCTS_MANAGEMENT_COLUMN_DEFS}
            dataSource={pagination.currentItems()}
            rowKey={(record) => record.sku}
            locale={{
              emptyText: <Empty text='No products found' />
            }}
            rowSelection={{
              type: 'checkbox'
            }}
            pagination={false}
          />
        ) : (
          <div className='flex flex-col gap-5'>
            {pagination.currentItems().map((product: any, index: any) => (
              <EventManagementCollapseItem
                key={`event-${index}`}
                product={product}
                handleCollapse={handleCollapse}
                activeCollapse={activeCollapse}
              />
            ))}
          </div>
        )} */
}

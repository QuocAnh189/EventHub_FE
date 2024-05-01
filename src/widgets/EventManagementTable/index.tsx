/* eslint-disable no-redeclare */
/* eslint-disable no-case-declarations */
/* eslint-disable no-duplicate-case */
// hooks
import { useEffect, useState } from 'react'
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

// constants
import {
  EVENT_MANAGEMENT_OPTIONS,
  EVENT_STATUS_OPTIONS,
  EVENT_SELLER_OPTIONS,
  EVENT_SELECT_OPTIONS
} from '@constants/options'
import { EEventAction } from '@constants/enum'

// data placeholder
import products_management from '@db/products_management'
import { useAppSelector } from '@hooks/useRedux'

// interface
import { ICategory } from 'interfaces/contents/category'

// types
import { IFilterEvent, IMetadataEventReponse } from '@type/event'
import { initFilterEvent } from '@type/event'

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

const EventManagement = () => {
  const categories = useAppSelector((state: RootState) => state.category.categories)
  const user = useAppSelector((state: RootState) => state.user.user)

  const { data } = useGetEventsByUserIdQuery({
    userId: user?.id!,
    params: { page: 1, takeAll: false, size: 4 }
  })

  const [movePublicEvent, { isLoading: loadingPublic }] = useMoveEventPublicMutation()
  const [movePrivateEvent, { isLoading: loadingPrivate }] = useMoveEventPrivateMutation()
  const [moveTrashEvent, { isLoading: loadingTrash }] = useMoveEventTrashMutation()
  const [moveDeleteEvent, { isLoading: loadingDelete }] = useDeleteEventsMutation()

  const [metadata, setMetadata] = useState<IMetadataEventReponse>()
  const [events, setEvents] = useState<IEvent[]>([])
  const [category, setCategory] = useState('ALL')

  const [checkedAll, setCheckedAll] = useState<boolean>(false)
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [filters, setFilters] = useState<IFilterEvent>(initFilterEvent)
  const [selectedAction, setSelectedAction] = useState<EEventAction>()
  const [eventIds, setEventIds] = useState<string[]>([])

  useEffect(() => {
    if (data) {
      console.log(data.items)
      setMetadata(data.metadata)
      setEvents(data.items)
    }
  }, [data])

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

  const handleFilterSelect = ({ value, label }: any, name: any) => {
    setFilters((prevState) => ({
      ...prevState,
      [name]: { value, label }
    }))
  }

  const handleApplyFilters = () => {
    console.log(filters)
  }

  const dataByStatus = () => {
    if (category === 'ALL') return products_management
    return products_management.filter((product) => product.status === category)
  }

  const pagination = usePagination(dataByStatus(), 4)

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

  return (
    <div className='flex flex-col flex-1'>
      <div className='flex flex-wrap gap-2 mb-4'>
        <span className='text-header'>Events:</span>
        <div>
          {EVENT_MANAGEMENT_OPTIONS.map((option, index: number) => (
            <FilterItem
              key={`filter-${index}`}
              text={option.label}
              qty={getQty(option?.value)!}
              value={option?.value}
              active={category}
              onClick={setCategory}
            />
          ))}
        </div>
      </div>
      <div className='grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-x-6 xl:grid-cols-6'>
        <Select
          options={EVENT_STATUS_OPTIONS}
          value={filters?.status}
          placeholder='Status'
          onChange={(e) => handleFilterSelect(e, 'status')}
        />
        <Select
          options={categories.map((category: ICategory) => {
            return { value: category.id, label: category.name }
          })}
          value={filters?.category}
          placeholder='Category'
          onChange={(e) => handleFilterSelect(e, 'category')}
        />
        <Select
          options={EVENT_SELLER_OPTIONS}
          value={filters.eventTicketType}
          placeholder='Price'
          onChange={(e) => handleFilterSelect(e, 'eventTicketType')}
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
      <div className='flex flex-col-reverse gap-4 mt-4 mb-5 md:flex-row md:justify-between md:items-end md:mt-5 md:mb-6'>
        <p>View events: {pagination.showingOf()}</p>
        <div className='md:min-w-[280px]'>
          <Select
            options={EVENT_SELECT_OPTIONS.filter((item) => item.value !== category)}
            placeholder='Select Action'
            onChange={handleSelectAction}
          />
        </div>
      </div>

      <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedAll}
              onChange={() => {
                setCheckedAll(!checkedAll)
              }}
            />
          }
          label='Select all'
        />
        <FormControlLabel control={<Checkbox />} label='Select page' />
      </FormGroup>

      <div className='flex flex-col gap-[22px]'>
        <div className='w-full grid grid-cols-2 gap-10'>
          {events.map((event, index) => (
            <CardMyEvent key={`event-${index}`} event={event} checkedAll={checkedAll} onChecked={handleChecked} />
          ))}
        </div>
        {pagination.maxPage > 1 && <Pagination pagination={pagination} />}
      </div>

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

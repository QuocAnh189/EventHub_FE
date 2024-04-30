/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

//form
import { Control, useFieldArray, UseFormRegister, UseFormWatch, UseFormSetValue } from 'react-hook-form'

//component
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import InputAdornment from '@mui/material/InputAdornment'
import LocationEvent from '@components/Location'

//icon
import { MdDateRange } from 'react-icons/md'
import { IoMdTime } from 'react-icons/io'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { ICreateEventPayload } from '@type/event'
import { GrClose, GrSubtractCircle } from 'react-icons/gr'
import { BiSearch } from 'react-icons/bi'

//map
import { fromAddress, setLanguage, setRegion, setKey } from 'react-geocode'
import { EEventStyle } from '@constants/enum'
setKey(import.meta.env.VITE_MAP_API_KEY)
setLanguage('en')
setRegion('vn')

//redux
import { ICategory } from 'interfaces/contents/category'
import { useAppSelector } from '@hooks/useRedux'

//type
import { toast } from 'react-toastify'

interface Props {
  create: boolean
  register: UseFormRegister<ICreateEventPayload>
  setValue: UseFormSetValue<ICreateEventPayload>
  watch: UseFormWatch<ICreateEventPayload>
  control: Control<ICreateEventPayload, any>
  setActive: (value: number) => void
}

const InfomationEvent = (props: Props) => {
  const { create, setActive, register, watch, control, setValue } = props
  const navigate = useNavigate()

  const categoriesStore = useAppSelector((state) => state.category.categories)

  const [position, setPosition] = useState(null)
  const [enableCheckError, setEnableCheckError] = useState<boolean>(false)

  const {
    fields: reasons,
    append: appendReasons,
    remove: removeReasons
  } = useFieldArray({
    control,
    name: 'reasons'
  })

  const {
    fields: categories,
    append: appendCategory,
    remove: removeCategory
  } = useFieldArray({
    control,
    name: 'categories'
  })

  useEffect(() => {
    if (watch().location) {
      fromAddress(watch().location)
        .then(({ results }) => {
          const result = results[0].geometry.location
          setPosition(result)
        })
        .catch(() => {
          setPosition(null)
        })
    }
  }, [])

  const handleLocation = async () => {
    fromAddress(watch().location)
      .then(({ results }) => {
        const result = results[0].geometry.location
        setPosition(result)
      })
      .catch(console.error)
  }

  const handleNextStep = () => {
    setEnableCheckError(true)
    if (
      watch().name &&
      watch().categories.length &&
      watch().eventType &&
      watch().startDate &&
      watch().endDate &&
      watch().startTime &&
      watch().endTime &&
      watch().location &&
      watch().description
    ) {
      setActive(1)
    } else {
      toast.error('Please enter full information')
    }
  }

  return (
    <div className='relative pl-24 fl pt-10 pb-20 space-y-10 min-h-screen '>
      <div className='flex gap-2 items-end '>
        <div className='h-[200px] w-[200px] flex flex-col gap-4 items-end justify-between'>
          <p className='font-semibold text-md py-2'>
            Event Title <span className='text-textError'>*</span>
          </p>
          <p className='font-semibold text-md py-2'>
            Event Category <span className='text-textError'>*</span>
          </p>
          <p className='font-semibold text-md py-2'>
            Event Type <span className='text-textError'>*</span>
          </p>
        </div>
        <div className='space-y-4'>
          <p className='font-semibold text-2xl'>Event Details</p>
          <div className='h-[200px] flex flex-col gap-4 w-[600px] justify-between'>
            <FormControl>
              <TextField
                error={enableCheckError ? (watch().name ? false : true) : false}
                {...register('name', { required: true })}
                name='name'
                label='Enter the name of the event'
                size='small'
              />
            </FormControl>
            <FormControl sx={{ minWidth: 120 }} size='medium'>
              <InputLabel error={enableCheckError ? (categories.length ? false : true) : false}>
                Choose category
              </InputLabel>

              <Select
                error={enableCheckError ? (categories.length ? false : true) : false}
                name='categories'
                label='Choose category'
                defaultValue=''
                sx={{
                  '& .MuiOutlinedInput-input': {
                    opacity: 0
                  }
                }}
                startAdornment={
                  <div className='flex items-center gap-3'>
                    {watch().categories.map((category, index) => {
                      const categorySelect = categoriesStore.find((categoryStore) => categoryStore.id === category)
                      return (
                        categorySelect && (
                          <div
                            key={`categories-select-${index}`}
                            className='relative flex items-center gap-2 bg-primary-400 p-2 text-white rounded-xl'
                          >
                            <button
                              onClick={() => {
                                removeCategory(index)
                              }}
                              className='z-[1000] flex items-center justify-center absolute w-4 h-4 rounded-[4px] bg-rose-600 -top-1 -right-1'
                            >
                              <GrClose color='#fff' />
                            </button>
                            <div className='flex flex-row items-center gap-2'>
                              <div
                                style={{ backgroundColor: categorySelect?.color }}
                                className={`w-[30px] h-[30px] rounded-lg bg-[${categorySelect?.color}] flex items-center justify-center`}
                              >
                                <img loading='lazy' className='w-[20px] h-[20px]' src={categorySelect?.iconImage} />
                              </div>
                            </div>
                            <div className='truncate'>{categorySelect?.name}</div>
                          </div>
                        )
                      )
                    })}
                  </div>
                }
                onChange={(e) => {
                  appendCategory(e.target.value)
                }}
              >
                {categoriesStore?.map((category: ICategory, index: number) => (
                  <MenuItem
                    defaultValue=''
                    key={`category-${index}`}
                    value={category.id}
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '8px'
                    }}
                  >
                    <div className='flex flex-row items-center gap-2'>
                      <div
                        style={{ backgroundColor: category.color }}
                        className={`w-[30px] h-[30px] rounded-lg bg-[${category.color}] flex items-center justify-center`}
                      >
                        <img loading='lazy' className='w-[20px] h-[20px]' src={category.iconImage} />
                      </div>
                    </div>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <RadioGroup
                {...register('eventType')}
                row
                aria-labelledby='demo-row-radio-buttons-group-label'
                name='row-radio-buttons-group'
                value={watch().eventType}
                onChange={(e: any) => {
                  setValue('eventType', e.target.value)
                }}
              >
                <FormControlLabel value={EEventStyle.SINGLE} control={<Radio />} label='Single Event' />
                <FormControlLabel value={EEventStyle.RECURRING} control={<Radio />} label='Recurring Event' />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>

      <div className='flex gap-2 items-end '>
        <div className='w-[200px] flex flex-col gap-4 items-end justify-start'>
          <p className='font-semibold text-md pb-20'>
            Session <span className='text-textError'>*</span>
          </p>
        </div>
        <div className='flex flex-col gap-4 w-[600px]'>
          <p className='font-semibold text-2xl'>Date & Time</p>
          <div className='w-[600px] flex items-center justify-between flex-wrap gap-2'>
            <FormControl>
              <FormLabel sx={{ fontWeight: 'bold' }}>Start Date</FormLabel>
              <TextField
                {...register('startDate')}
                error={enableCheckError ? (watch().startDate ? false : true) : false}
                sx={{ width: '250px' }}
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <MdDateRange />
                    </InputAdornment>
                  )
                }}
                type='date'
              />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ fontWeight: 'bold' }}>End Date</FormLabel>
              <TextField
                {...register('endDate')}
                error={enableCheckError ? (watch().endDate ? false : true) : false}
                sx={{ width: '250px' }}
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <MdDateRange />
                    </InputAdornment>
                  )
                }}
                type='date'
              />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ fontWeight: 'bold' }}>Start Time</FormLabel>
              <TextField
                {...register('startTime')}
                error={enableCheckError ? (watch().startTime ? false : true) : false}
                sx={{ width: '250px' }}
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <IoMdTime />
                    </InputAdornment>
                  )
                }}
                type='time'
              />
            </FormControl>
            <FormControl>
              <FormLabel sx={{ fontWeight: 'bold' }}>End Time</FormLabel>
              <TextField
                {...register('endTime')}
                error={enableCheckError ? (watch().endTime ? false : true) : false}
                sx={{ width: '250px' }}
                size='small'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <IoMdTime />
                    </InputAdornment>
                  )
                }}
                type='time'
              />
            </FormControl>
          </div>
        </div>
      </div>

      <div className='flex gap-2'>
        <div className='w-[200px] flex pt-10'>
          <p className='font-semibold text-md pl-12 text-center'>Where will your event take place</p>
          <span className='text-textError'>*</span>
        </div>
        <div className='h-50 flex flex-col gap-4 w-[600px]'>
          <p className='font-semibold text-2xl'>Choose Location</p>
          <FormControl>
            <TextField
              {...register('location')}
              error={enableCheckError ? (watch().location ? false : true) : false}
              id='outlined-basic'
              label='Enter the name of location'
              size='small'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end' className='hover:cursor-pointer'>
                    <BiSearch size={32} onClick={handleLocation} />
                  </InputAdornment>
                )
              }}
            />
          </FormControl>
          {position && <LocationEvent position={position} />}
        </div>
      </div>

      <div className='flex gap-2'>
        <div className='w-[200px] flex flex-col gap-4 items-end'>
          <p className='font-semibold text-md pl-6 pt-12 text-center'>
            Event Description <span className='text-textError'>*</span>
          </p>
        </div>
        <div className='h-50 flex flex-col gap-4 w-[600px]'>
          <p className='font-semibold text-2xl'>Additional Infomation</p>
          <FormControl>
            <TextField
              error={enableCheckError ? (watch().description ? false : true) : false}
              {...register('description')}
              multiline={true}
              rows={4}
              id='outlined-basic'
              label='Enter description of event'
            />
          </FormControl>
        </div>
      </div>

      <div className='flex gap-2'>
        <div className='w-[200px] flex flex-col gap-4 items-end'>
          <p className='font-semibold text-md pl-6 pt-12 text-center'>Event Reason</p>
        </div>
        <div className='h-50 flex flex-col gap-4 w-[600px]'>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-2xl'>Reason</p>
            <IoMdAddCircleOutline
              size={30}
              className='hover:cursor-pointer'
              onClick={() => {
                appendReasons('')
              }}
            />
          </div>

          {reasons.map((field: any, index: any) => (
            <FormControl key={field.id}>
              <TextField
                {...register(`reasons.${index}`)}
                id='outlined-basic'
                label={`Reason ${index + 1}`}
                size='small'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='start'>
                      <GrSubtractCircle
                        size={32}
                        className='hover:cursor-pointer'
                        onClick={() => {
                          removeReasons(index)
                        }}
                      />
                    </InputAdornment>
                  )
                }}
              />
            </FormControl>
          ))}
        </div>
      </div>

      <div className='absolute flex items-center gap-4 right-8'>
        <button
          className='btn bg-textGray hover:text-white'
          onClick={() => {
            create ? setActive(-1) : navigate(-1)
          }}
        >
          Go back
        </button>
        <button className=' btn btn--primary ' onClick={handleNextStep}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default InfomationEvent

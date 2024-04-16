/* eslint-disable no-unused-vars */
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
import LocationEvent from '@components/common/Location'

//icon
import { MdDateRange } from 'react-icons/md'
import { IoMdTime } from 'react-icons/io'
import { IoMdAddCircleOutline } from 'react-icons/io'

interface Props {
  setActive: (value: number) => void
}
const InfomationEvent = (props: Props) => {
  const { setActive } = props

  return (
    <div className='relative pl-24 fl pt-10 pb-20 space-y-10 min-h-screen '>
      <div className='flex gap-2 items-end '>
        <div className='w-[200px] flex flex-col gap-4 items-end'>
          <p className='font-semibold text-md py-2'>
            Event Title <span className='text-textError'>*</span>
          </p>
          <p className='font-semibold text-md py-4'>
            Event Category <span className='text-textError'>*</span>
          </p>
        </div>
        <div className='h-50 flex flex-col gap-4 w-[600px]'>
          <p className='font-semibold text-2xl'>Event Details</p>
          <FormControl>
            <TextField id='outlined-basic' label='Eventer the name of the events' size='small' />
          </FormControl>
          <FormControl sx={{ my: 1, minWidth: 120 }} size='small'>
            <InputLabel id='demo-select-small-label'>Choose category</InputLabel>
            <Select
              labelId='demo-select-small-label'
              id='demo-select-small'
              // value={age}
              label='Choose category'
              // onChange={handleChange}
            >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Game</MenuItem>
              <MenuItem value={20}>Sport</MenuItem>
              <MenuItem value={30}>Music</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className='flex gap-2 items-end '>
        <div className='w-[200px] flex flex-col gap-4 items-end'>
          <p className='font-semibold text-md py-4'>
            Event Type <span className='text-textError'>*</span>
          </p>
          <p className='font-semibold text-md py-4'>
            Session <span className='text-textError'>*</span>
          </p>
        </div>
        <div className='h-50 flex flex-col gap-4 w-[600px]'>
          <p className='font-semibold text-2xl'>Date & Time</p>
          <FormControl>
            <RadioGroup row aria-labelledby='demo-row-radio-buttons-group-label' name='row-radio-buttons-group'>
              <FormControlLabel value='Single Event' control={<Radio />} label='Single Event' />
              <FormControlLabel value='Recurring Event' control={<Radio />} label='Recurring Event' />
            </RadioGroup>
          </FormControl>
          <div className='w-[900px] flex items-center justify-between'>
            <FormControl>
              <FormLabel>Start Date</FormLabel>
              <TextField
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
              <FormLabel>Start Time</FormLabel>
              <TextField
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
              <FormLabel>End Time</FormLabel>
              <TextField
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
            <TextField id='outlined-basic' label='Enter the name of location' size='small' />
          </FormControl>
          <LocationEvent />
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
              inputProps={{
                style: {
                  height: 100,
                  width: 900
                }
              }}
              id='outlined-basic'
              label='Enter the name of location'
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
            <IoMdAddCircleOutline size={30} className='hover:cursor-pointer' />
          </div>
          <FormControl>
            <TextField id='outlined-basic' label='Reason 1' size='small' />
          </FormControl>
          <FormControl>
            <TextField id='outlined-basic' label='Reason 2' size='small' />
          </FormControl>
          <FormControl>
            <TextField id='outlined-basic' label='Reason 3' size='small' />
          </FormControl>
        </div>
      </div>

      <button
        className='absolute btn btn--primary right-8'
        onClick={() => {
          setActive(1)
        }}
      >
        Continue
      </button>
    </div>
  )
}

export default InfomationEvent

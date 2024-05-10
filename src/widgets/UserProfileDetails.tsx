// hooks
import { Controller, UseFormRegister, UseFormWatch, UseFormSetValue, Control } from 'react-hook-form'
import { useTheme } from '@contexts/themeContext'

// components
import Spring from '@components/Spring'
import Select from '@ui/Select'
import { NavLink } from 'react-router-dom'
import { PatternFormat } from 'react-number-format'

// utils
import classNames from 'classnames'

import { IUser } from 'interfaces/systems/user'
import { CircularProgress } from '@mui/material'
import { EUserStatus } from '@constants/enum'

interface Props {
  register: UseFormRegister<IUser>
  watch: UseFormWatch<IUser>
  setValue: UseFormSetValue<IUser>
  control: Control<IUser>
  errors: any
  isLoading: boolean
  roles: string[]
  status: EUserStatus
}

const UserProfileDetails = (props: Props) => {
  const { register, watch, setValue, control, errors, isLoading, roles, status } = props

  const { theme, toggleTheme }: any = useTheme()

  return (
    <Spring
      className='card flex flex-col gap-[30px] md:gap-12 md:row-start-2 md:col-span-2 md:!pb-[50px]
                xl:row-start-1 xl:col-start-2 xl:col-span-1'
    >
      <div className='flex flex-col gap-5'>
        <h5>My Profile</h5>

        <div className='grid gap-4 md:grid-cols-2 md:gap-5'>
          <div className='grid gap-4'>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='firstName'>
                User Name
              </label>
              <input
                className={classNames('field-input text-header', { 'field-input--error': errors.userName })}
                type='text'
                id='userName'
                placeholder='User Name'
                defaultValue='Maria'
                {...register('userName', { required: true })}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='lastName'>
                Full Name
              </label>
              <input
                className={classNames('field-input text-header', { 'field-input--error': errors.fullName })}
                type='text'
                id='fullName'
                placeholder='Full Name'
                defaultValue='Smith'
                {...register('fullName', { required: true })}
              />
            </div>

            <div className='field-wrapper'>
              <label className='field-label' htmlFor='email'>
                Email
              </label>
              <input
                className={classNames('field-input text-header', { 'field-input--error': errors.email })}
                type='text'
                id='email'
                placeholder='Email'
                defaultValue='maria@email.com'
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='lastName'>
                Password
              </label>
              <input
                className={classNames('field-input text-header', { 'field-input--error': errors.fullName })}
                type='text'
                id='fullName'
                placeholder='Full Name'
                defaultValue='Smith'
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='phone'>
                Phone Number
              </label>
              <Controller
                name='phoneNumber'
                control={control}
                render={({ field }) => (
                  <PatternFormat
                    value={field.value}
                    format='+#-###-###-####'
                    placeholder='(123) 456-7890'
                    className={classNames('field-input text-header', { 'field-input--error': errors.phoneNumber })}
                    getInputRef={field.ref}
                  />
                )}
              />
            </div>
          </div>
          <div className='grid gap-4'>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='city'>
                Gender
              </label>
              <Select
                placeholder='Gender'
                id='gender'
                options={[
                  { value: 'MALE', label: 'MALE' },
                  { value: 'FEMALE', label: 'FEMALE' },
                  { value: 'OTHER', label: 'OTHER' }
                ]}
                value={{ value: watch().gender, label: watch().gender }}
                onChange={(e: any) => {
                  setValue('gender', e.value)
                }}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label text-header' htmlFor='state'>
                Day of birth
              </label>
              <input
                className='field-input text-header'
                type='date'
                id='state'
                placeholder='State'
                {...register('dob')}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='zip'>
                Status
              </label>
              <input
                readOnly
                className='field-input text-header'
                type='text'
                id='Status'
                placeholder='Status'
                value={status}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='firstName'>
                Role
              </label>
              <input
                readOnly
                className={classNames('field-input text-header')}
                type='text'
                id='role'
                placeholder='Role'
                value={roles}
              />
            </div>
            <div className='field-wrapper'>
              <label className='field-label' htmlFor='address'>
                Bio
              </label>
              <input className='field-input text-header' type='text' id='Bio' placeholder='Bio' {...register('bio')} />
            </div>
          </div>
        </div>
        <div className='mt-2.5'>
          <button className='text-btn' type='button'>
            Change password
          </button>
          <button disabled={isLoading} type='submit' className='btn btn--primary w-[260px] mt-5'>
            {isLoading ? <CircularProgress size={24} /> : 'Update information'}
          </button>
        </div>
      </div>
      <div>
        <h5>Admin Panel Tools</h5>
        <div className='grid gap-4 mt-5 md:grid-cols-2 md:gap-y-8 md:gap-x-[50px] md:mt-8 lg:grid-cols-3 lg:max-w-[780px]'>
          <NavLink className='tool-btn text-header' to='/connected-apps'>
            <span className='icon-wrapper'>
              <i className='icon icon-window-solid' />
            </span>
            <span>
              Connected Apps <span className='subheading-2'>(12)</span>
            </span>
          </NavLink>
          <NavLink className='tool-btn text-header' to='/connected-apps'>
            <span className='icon-wrapper'>
              <i className='icon icon-money-check-dollar-pen-solid' style={{ fontSize: 16 }} />
            </span>
            Payment Methods
          </NavLink>
          <NavLink className='tool-btn text-header' to='/connected-apps'>
            <span className='icon-wrapper'>
              <i className='icon icon-screwdriver-wrench-solid' />
            </span>
            Appearance
          </NavLink>
          <NavLink className='tool-btn text-header' to='/connected-apps'>
            <span className='icon-wrapper'>
              <i className='icon icon-shield-halved-solid' />
            </span>
            Security Assets
          </NavLink>
          <NavLink className='tool-btn text-header' to='/connected-apps'>
            <span className='icon-wrapper'>
              <i className='icon icon-sliders-solid' />
            </span>
            Configuration Settings
          </NavLink>
          <button className='tool-btn text-header' aria-label='Change theme' onClick={toggleTheme}>
            <span className='icon-wrapper'>
              <i className={`icon icon-${theme === 'light' ? 'sun-bright' : 'moon'}-solid`} />
            </span>
            View Mode
          </button>
        </div>
      </div>
    </Spring>
  )
}

export default UserProfileDetails

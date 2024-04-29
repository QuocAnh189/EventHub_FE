// components
import { PageHeader } from '@layouts/components'

import UserProfileCard from '@widgets/UserProfileCard'
import UserProfileDetails from '@widgets/UserProfileDetails'
import UserProfilePanel from '@widgets/UserProfilePanel'
import UserProfileInfo from '@widgets/UserProfileInfo'

//format
import { useAppSelector } from '@hooks/useRedux'

const Profile = () => {
  const user = useAppSelector((state) => state.user.user)

  // console.log(mockUser)
  // const user = {
  //   userName: mockUser?.userName,
  //   fullName: mockUser?.fullName,
  //   email: mockUser?.email,
  //   phone: mockUser?.phoneNumber,
  //   password: 'password',
  //   gender: mockUser?.gender,
  //   dob: dayjs(mockUser?.dob).format('YYYY-MM-DD'),
  //   status: mockUser?.status,
  //   role: mockUser?.roles?.join(''),
  //   bio: mockUser?.bio
  // }

  return (
    <>
      <PageHeader title='Settings' />
      <div className='widgets-grid md:!grid-cols-2 xl:!grid-cols-[340px,_minmax(0,1fr)]'>
        <div className='widgets-grid md:!grid-cols-2 md:col-span-2 xl:!grid-cols-1 xl:col-span-1'>
          <UserProfileCard avatar={user?.avatar!} userName={user?.userName!} roles={user?.roles} />
          <div className='widgets-grid'>
            <UserProfilePanel />
            <UserProfileInfo />
          </div>
        </div>
        <UserProfileDetails user={user} />
      </div>
    </>
  )
}

export default Profile

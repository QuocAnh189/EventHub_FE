import { useGetPermissionsQuery } from '@redux/services/permissionApi'
import PermissionsTable from '@widgets/PermissionsTable'
import { Spin } from 'antd'

export function GeneralPermissions() {
  const { data, isLoading } = useGetPermissionsQuery()

  return isLoading ? (
    <div className='flex items-center justify-center w-full'>
      <Spin spinning={isLoading} size='large' />
    </div>
  ) : (
    <PermissionsTable permissions={data ?? []} />
  )
}

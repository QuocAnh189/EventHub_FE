import { useGetFunctionsQuery } from '@redux/services/functionApi'
import { useGetPermissionsByRoleQuery } from '@redux/services/permissionApi'
import RolePermissionsTable from '@widgets/RolePermissionsTable'
import { Spin } from 'antd'

export function RolePermissions() {
  const { data: permissions, isLoading: permissionsLoading } = useGetPermissionsByRoleQuery()
  const { data: functions, isLoading: functionsLoading } = useGetFunctionsQuery()

  return permissionsLoading || functionsLoading ? (
    <div className='flex items-center justify-center w-full'>
      <Spin spinning={permissionsLoading || functionsLoading} size='large' />
    </div>
  ) : (
    <RolePermissionsTable permissions={permissions ?? []} functions={functions ?? []} />
  )
}

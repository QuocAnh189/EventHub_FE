import { GeneralPermissions, RolePermissions } from '@components/permissions'
import AdminProtectedLayout from '@layouts/admin-protected'
import { PageHeader } from '@layouts/components'
import { Tabs } from 'antd'

const TAB_ITEMS = [
  {
    key: 'GENERALS',
    label: 'Generals',
    children: <GeneralPermissions />
  },
  {
    key: 'ROLES',
    label: 'Roles',
    children: <RolePermissions />
  }
]

const Permission = () => {
  return (
    <AdminProtectedLayout>
      <PageHeader title='Permissions' />
      <Tabs defaultActiveKey='2' items={TAB_ITEMS} type='card' className='permissions-tabs' />
    </AdminProtectedLayout>
  )
}

export default Permission

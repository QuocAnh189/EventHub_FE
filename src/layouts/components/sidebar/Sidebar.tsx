//hook
import { useEffect, useState } from 'react'

// component
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Conversations from './Conversations'
import SearchInput from './SearchInput'

//interface
import { initParamsConversationHost, initParamsConversationUser } from '@type/conversation'

//redux

import { useGetConversationByUserQuery, useGetConversationByHostQuery } from '@redux/services/userApi'
import { useAppDispatch, useAppSelector } from '@hooks/useRedux'
import { setConservation, setConservationHost, setConservationUser } from '@redux/slices/conservationSlice'
import { withTranslation } from 'react-i18next'

const Sidebar = ({ t }: any) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.persistedReducer.user.user)
  const conversation_host = useAppSelector((state) => state.persistedReducer.conservation.conservationsHost)
  const conversation_user = useAppSelector((state) => state.persistedReducer.conservation.conservationsUser)

  const [value, setValue] = useState<string>('1')

  const { data: conversationHost } = useGetConversationByHostQuery({
    userId: user?.id!,
    params: initParamsConversationHost
  })

  useEffect(() => {
    if (conversationHost) {
      dispatch(setConservationHost(conversationHost?.items))
    }
  }, [conversationHost, dispatch])

  const { data: conversationUser } = useGetConversationByUserQuery({
    userId: user?.id!,
    params: initParamsConversationUser
  })

  useEffect(() => {
    if (conversationUser) {
      dispatch(setConservationUser(conversationUser?.items))
    }
  }, [conversationUser, dispatch])

  const handleChange = (_event: any, newValue: string) => {
    setValue(newValue)
    dispatch(setConservation(null))
  }

  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <SearchInput />
      <div className='divider' />
      {user && (
        <div className='w-full overflow-scroll no-scrollbar'>
          <TabContext value={value}>
            <Tabs textColor='inherit' value={value} onChange={handleChange} aria-label='lab API tabs example'>
              <Tab label={t('box_message.left.my_event')} value='1' sx={{ color: 'var(--header)' }} />
              <Tab label={t('box_message.left.chat_event')} value='2' sx={{ color: 'var(--header)' }} />
            </Tabs>

            <TabPanel value='1' sx={{ width: '100%' }}>
              {conversation_host && <Conversations host={true} conversations={conversation_host!} />}
            </TabPanel>

            <TabPanel value='2' sx={{ width: '100%' }}>
              {conversation_user && <Conversations host={false} conversations={conversation_user} />}
            </TabPanel>
          </TabContext>
        </div>
      )}
    </div>
  )
}
export default withTranslation('common')(Sidebar)

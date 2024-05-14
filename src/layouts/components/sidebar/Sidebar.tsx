// component
import { useEffect } from 'react'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import SearchInput from './SearchInput'

//interface
import { initConversationParams } from '@type/conversation'

//redux
import { useGetConversationsQuery } from '@redux/services/conversationApi'

const Sidebar = () => {
  const { data } = useGetConversationsQuery(initConversationParams)

  useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data])

  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <SearchInput />
      <div className='divider px-3'></div>
      <Conversations />
      <LogoutButton />
    </div>
  )
}
export default Sidebar

import { withTranslation } from 'react-i18next'
import MessageInput from './MessageInput'
import Messages from './Messages'

//redux
import { useAppSelector } from '@hooks/useRedux'

//assets
import { BiMessageDetail } from 'react-icons/bi'
import { useContext } from 'react'
import { AppSocketContext } from '@contexts/socketContext'

const MessageContainer = ({ t }: any) => {
  const conversationActive = useAppSelector((state) => state.persistedReducer.conservation.conservation)
  const user = useAppSelector((state) => state.persistedReducer.user.user)
  const { connection } = useContext(AppSocketContext)

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!conversationActive ? (
        <NoChatSelected t={t} />
      ) : (
        <>
          <div className='flex items-center gap-1 px-4 py-2 mb-2 bg-primary'>
            <span className='text-white'>{t('box_message.right.to')}:</span>{' '}
            <div className='flex items-center gap-1'>
              {conversationActive.hostId === user?.id ? (
                <>
                  <img
                    src={conversationActive?.user?.avatar}
                    loading='lazy'
                    alt=''
                    className='object-cover w-10 h-10 rounded-full'
                  />
                  <span className='text-xl font-bold text-textOrange'>{conversationActive?.user?.fullName}</span>
                </>
              ) : (
                <>
                  <img
                    src={conversationActive?.host?.avatar}
                    loading='lazy'
                    alt=''
                    className='object-cover w-10 h-10 rounded-full'
                  />
                  <span className='text-xl font-bold text-textOrange'>{conversationActive?.host?.fullName}</span>
                </>
              )}
            </div>
          </div>
          {connection && (
            <>
              <Messages />
              <MessageInput t={t} />
            </>
          )}
        </>
      )}
    </div>
  )
}
export default withTranslation('common')(MessageContainer)

const NoChatSelected = ({ t }: any) => {
  const user = useAppSelector((state) => state.persistedReducer.user.user)

  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='flex flex-col items-center gap-2 px-4 font-semibold text-center text-gray-200 sm:text-lg md:text-xl'>
        {user ? (
          <>
            <p>
              {t('box_message.right.nochat_text_one')} 👋 {user?.fullName} ❄
            </p>
            <p>{t('box_message.right.nochat_text_two')}</p>
            <BiMessageDetail className='text-3xl text-center md:text-6xl' />
          </>
        ) : (
          <>
            <p>{t('box_message.right.nologin_text_one')}</p>
            <p>{t('box_message.right.nologin_text_two')}</p>
          </>
        )}
      </div>
    </div>
  )
}

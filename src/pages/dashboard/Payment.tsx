//component
import PaymentAccountsList from '@components/payment/PaymentAccountsList'
import { useAppSelector } from '@hooks/useRedux'
import { PageHeader } from '@layouts/components'
import ProtectedLayout from '@layouts/protected'
import { useGetPaymentAccountsQuery } from '@redux/services/userApi'
import { Spin } from 'antd'
import { useEffect, useState } from 'react'
import Invoice from './components/Invoice'
import PaymentAccountModal from '@components/payment/PaymentAccountModal'
import { IPaymentAccount } from 'interfaces/contents/payment'

const Payment = () => {
  const user = useAppSelector((state) => state.user.user)

  const { data, isLoading, refetch } = useGetPaymentAccountsQuery(user?.id!)

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [selectedAccount, setSelectedAccount] = useState<IPaymentAccount>()

  useEffect(() => {
    refetch()
  }, [])

  return (
    <>
      <ProtectedLayout>
        <PageHeader title='Billing' />
        <div className='grid w-full grid-cols-3 gap-4'>
          <div className='col-span-2'>
            {isLoading ? (
              <Spin spinning={isLoading} />
            ) : (
              data?.items && (
                <PaymentAccountsList
                  accounts={data?.items || []}
                  isLoading={isLoading}
                  onClick={(method: any) => {
                    setSelectedAccount(method)
                    setIsOpenModal(true)
                  }}
                />
              )
            )}
          </div>
          <div className='col-span-1'>
            <Invoice />
          </div>
        </div>
      </ProtectedLayout>
      {isOpenModal && selectedAccount && (
        <PaymentAccountModal isModalOpen={isOpenModal} setIsModalOpen={setIsOpenModal} account={selectedAccount} />
      )}
    </>
  )
}

export default Payment

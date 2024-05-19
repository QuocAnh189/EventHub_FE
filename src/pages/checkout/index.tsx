import { QuantityButton } from '@components/QuantityButton'
import { useAppSelector } from '@hooks/useRedux'
import ProtectedLayout from '@layouts/protected'
import { useGetEventByIdQuery } from '@redux/services/eventApi'
import { useCheckoutMutation } from '@redux/services/paymentApi'
import { useGetPaymentAccountsQuery } from '@redux/services/userApi'
import { CheckoutItem, CheckoutPayload } from '@type/payment'
// eslint-disable-next-line no-redeclare
import { Button, Divider, Form, Image, Input, Spin, notification } from 'antd'
import { IPaymentAccount } from 'interfaces/contents/payment'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export interface CustomerInformationForm {
  customerName: string
  customerPhone: string
  customerEmail: string
}

export interface PaymentItem {
  id: string
  quantity: number
  price: number
  name: string
  maxQuantity: number
}

export default function CheckoutPage() {
  const params = useParams()

  const [checkout, { isLoading: checkoutLoading }] = useCheckoutMutation()
  const { data: event, isLoading: getEventLoading } = useGetEventByIdQuery(params.id!)
  const {
    data: accountsList,
    isLoading: getPaymentAccountsLoading,
    refetch
  } = useGetPaymentAccountsQuery(event?.creatorId!)

  const user = useAppSelector((state) => state.user.user)

  const [selectedAccount, setSelectedAccount] = useState<IPaymentAccount>()
  const [paymentItems, setPaymentItems] = useState<PaymentItem[]>([])

  const [form] = Form.useForm<CustomerInformationForm>()

  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    if (event?.ticketTypes) {
      setPaymentItems(
        event.ticketTypes.map(
          (type) =>
            ({
              ...type,
              quantity: 0,
              maxQuantity: type.quantity
            } as PaymentItem)
        )
      )
    }
  }, [event])

  function handleDecreaseQuantity(ticketTypeId: string) {
    setPaymentItems((prevItems) => {
      return prevItems.map((item) => ({
        ...item,
        quantity: ticketTypeId === item.id ? Math.max(item.quantity - 1, 0) : item.quantity
      }))
    })
  }

  function handleIncreaseQuantity(ticketTypeId: string) {
    setPaymentItems((prevItems) => {
      return prevItems.map((item) => ({
        ...item,
        quantity: ticketTypeId === item.id ? Math.min(item.quantity + 1, item.maxQuantity) : item.quantity
      }))
    })
  }

  async function handlerConfirmPayment() {
    try {
      await form.validateFields()

      const { customerEmail, customerName, customerPhone } = form.getFieldsValue()

      const checkoutPayload: CheckoutPayload = {
        fullName: customerName,
        email: customerEmail,
        phoneNumber: customerPhone,
        eventId: event?.id || '',
        userId: user?.id || '',
        userPaymentMethodId: selectedAccount?.id || '',
        items: paymentItems
          .filter((item) => item.quantity <= 0)
          .map(
            (item) =>
              ({
                ticketTypeId: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity
              } as CheckoutItem)
          )
      }

      await checkout(checkoutPayload).unwrap()

      notification.success({
        message: 'Create new order successfully!'
      })
    } catch (error) {
      console.log('🚀 ~ handlerConfirmPayment ~ error:', error)
      notification.error({
        message: 'Failed to create order'
      })
    }
  }

  return (
    <ProtectedLayout>
      <div className='flex gap-4'>
        <div className='flex flex-col flex-1 gap-8'>
          <div className='p-8 border-2 border-solid rounded-lg border-neutral-400'>
            <h3 className='mb-4'>Customer Information</h3>
            <Form form={form} size='large' autoComplete='off' labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
              <div className='grid grid-cols-2 gap-4'>
                <Form.Item
                  name='customerName'
                  label={<span className='font-medium'>Fullname</span>}
                  rules={[{ required: true, message: 'CustomerName is required' }]}
                  style={{ marginBottom: 0 }}
                >
                  <Input placeholder='Enter customer fullname' />
                </Form.Item>
                <Form.Item
                  name='customerPhone'
                  label={<span className='font-medium'>Phone Number</span>}
                  rules={[{ required: true, message: 'CustomerPhone is required' }]}
                  style={{ marginBottom: 0 }}
                >
                  <Input placeholder='Enter customer phone number' />
                </Form.Item>
                <Form.Item
                  name='customerEmail'
                  label={<span className='font-medium'>Address</span>}
                  rules={[{ required: true, message: 'CustomerEmail is required' }]}
                  style={{ marginBottom: 0 }}
                  className='col-span-2'
                >
                  <Input placeholder='Enter customer address' />
                </Form.Item>
              </div>
            </Form>
          </div>

          <div className='p-8 border-2 border-solid rounded-lg border-neutral-400'>
            <h3>Payment Method</h3>
            <div className='flex flex-wrap gap-4 mt-4'>
              {getPaymentAccountsLoading || getEventLoading ? (
                <Spin spinning={getPaymentAccountsLoading || getEventLoading} />
              ) : accountsList?.items && accountsList.items.length ? (
                accountsList.items.map((account) => (
                  <div
                    className='flex items-center justify-center w-32 h-20 px-8 bg-white rounded-md shadow-lg cursor-pointer hover:!bg-slate-100'
                    key={account.id}
                    style={{
                      backgroundColor: selectedAccount?.id === account.id ? 'rgb(203 213 225)' : 'white'
                    }}
                    onClick={() => setSelectedAccount(account)}
                  >
                    <img src={account.methodLogo} alt='method-logo' className='object-cover' />
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
            {selectedAccount && (
              <div className='flex flex-col items-center gap-4 mt-4'>
                <Image
                  fallback='/blank-image.jpg'
                  width={200}
                  height={200}
                  src={selectedAccount.paymentAccountQRCode}
                  preview={false}
                  className='object-cover'
                  alt='qr-code'
                />
                <Image
                  src={selectedAccount.methodLogo}
                  width={132}
                  height={74}
                  preview={false}
                  alt='method-logo'
                  className='object-contain'
                />
                <h4 className='text-neutral-600'>{selectedAccount.methodName}</h4>
                <h4 className='text-neutral-700'>{selectedAccount.paymentAccountNumber}</h4>
                <h5 className='text-neutral-600'>Nội dung chuyển khoản:</h5>
                <span className='text-neutral-500'>{selectedAccount.checkoutContent}</span>
              </div>
            )}
          </div>
        </div>
        <div className='w-1/3 bg-white'>
          <div className='p-8 border-2 border-solid rounded-lg border-neutral-400'>
            <h3 className='mb-4'>Tickets Information</h3>
            {event?.ticketTypes.map((type) => (
              <div key={type.id} className='flex flex-col gap-4'>
                <div className='flex items-center justify-between'>
                  <span className='font-bold text-primary-700'>{type.name.toUpperCase()}</span>
                  {type?.price && type.price > 0 ? (
                    <span className='text-black'>
                      {(type.price * 1000).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                    </span>
                  ) : (
                    <span className='text-green-darker'>FREE</span>
                  )}
                </div>
                <div className='flex items-center justify-between'>
                  <span className='font-bold text-black'>Quantity</span>
                  <QuantityButton
                    onDecrease={() => handleDecreaseQuantity(type.id)}
                    onIncrease={() => handleIncreaseQuantity(type.id)}
                    quantity={paymentItems.find((item) => item.id === type.id)?.quantity || 0}
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <span className='font-bold text-black'>Total Amount:</span>
                  <span className='text-black'>
                    {(
                      type.price *
                      1000 *
                      (paymentItems.find((item) => item.id === type.id)?.quantity || 0)
                    ).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
                  </span>
                </div>
                <Divider />
              </div>
            ))}
            <div className='flex items-center justify-between text-lg'>
              <span className='font-bold text-black '>SUB TOTAL PRICE:</span>
              <span className='text-black'>
                {(
                  paymentItems.reduce((prevValue, curItem) => prevValue + curItem.quantity * curItem.price * 1000, 0) ||
                  0
                ).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
              </span>
            </div>
            <div className='flex items-center justify-between mt-4 text-lg'>
              <span className='font-bold text-black '>DISCOUNT:</span>
              <span className='text-black'>
                -{' '}
                {(
                  (paymentItems.reduce(
                    (prevValue, curItem) => prevValue + curItem.quantity * curItem.price * 1000,
                    0
                  ) || 0) * (event?.promotion || 0)
                ).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
              </span>
            </div>
            <Divider />
            <div className='flex items-center justify-between mt-4 text-lg'>
              <span className='font-bold text-black '>TOTAL PRICE:</span>
              <span className='text-black'>
                {(
                  (paymentItems.reduce(
                    (prevValue, curItem) => prevValue + curItem.quantity * curItem.price * 1000,
                    0
                  ) || 0) *
                  (1 - (event?.promotion || 0))
                ).toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
              </span>
            </div>
          </div>
          <Button
            loading={checkoutLoading}
            onClick={handlerConfirmPayment}
            className='text-white !h-auto rounded-md !bg-primary hover:!text-white hover:!bg-primary-500 mt-8 w-full text-2xl py-4 font-medium'
          >
            Confirm Payment
          </Button>
        </div>
      </div>
    </ProtectedLayout>
  )
}

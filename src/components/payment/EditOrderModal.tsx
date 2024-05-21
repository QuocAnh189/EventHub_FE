import { useAppSelector } from '@hooks/useRedux'
import { useUpdatePaymentMutation } from '@redux/services/paymentApi'
import { UpdateOrderPayload } from '@type/payment'
import { Button, Form, Input, Modal, notification } from 'antd'
import { IPayment } from 'interfaces/contents/payment'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'

export interface IEditOrderModalProps {
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  order: IPayment
}

export interface UpdateOrderForm {
  customerName: string
  customerEmail: string
  customerPhone: string
}

export function EditOrderModal({ isModalOpen, setIsModalOpen, order }: IEditOrderModalProps) {
  const [updatePayment, { isLoading: updatePaymentLoading }] = useUpdatePaymentMutation()

  const [form] = Form.useForm<UpdateOrderForm>()

  const handleInitializeForm = useRef<(() => Promise<void>) | null>(null)

  useEffect(() => {
    handleInitializeForm.current = async () => {
      form.setFieldsValue({
        customerEmail: order.customerEmail,
        customerName: order.customerName,
        customerPhone: order.customerPhone
      })
    }
    handleInitializeForm.current()
    ;() => handleInitializeForm.current
  }, [form, order])

  async function handleUpdateOrder(values: UpdateOrderForm) {
    try {
      var payload: UpdateOrderPayload = { ...values, paymentId: order.id }

      await updatePayment(payload).unwrap()

      notification.success({
        message: 'Update order successfully!'
      })
      setIsModalOpen(false)
    } catch (error: any) {
      console.log('🚀 ~ handleUpdateOrder ~ error:', error)
      notification.error({
        message: 'Failed to update order'
      })
    }
  }

  return (
    <Modal
      title='Update order'
      onCancel={() => setIsModalOpen(false)}
      open={isModalOpen}
      footer={[null, null]}
      destroyOnClose={true}
      afterClose={form.resetFields}
    >
      <Form
        form={form}
        size='large'
        autoComplete='off'
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        onFinish={handleUpdateOrder}
        onFinishFailed={(error) => {
          console.log('🚀 ~ EditOrderModal ~ error:', error)
        }}
      >
        <Form.Item
          name='customerName'
          label={<span className='font-medium'>Name</span>}
          rules={[{ required: true, message: 'CustomerName is required' }]}
        >
          <Input placeholder='Enter your fullname' />
        </Form.Item>
        <Form.Item
          name='customerEmail'
          label={<span className='font-medium'>Email</span>}
          rules={[
            { required: true, message: 'CustomerEmail is required' },
            { type: 'email', message: 'Email is invalid format' }
          ]}
        >
          <Input placeholder='Enter your emaill address' />
        </Form.Item>
        <Form.Item
          name='customerPhone'
          label={<span className='font-medium'>Phone</span>}
          rules={[{ required: true, message: 'CustomerPhone is required' }]}
        >
          <Input placeholder='Enter your phone number' />
        </Form.Item>
        <div className='flex justify-end gap-3'>
          <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
          <Button htmlType='submit' onClick={() => form.submit()} type='primary' loading={updatePaymentLoading}>
            Update
          </Button>
        </div>
      </Form>
    </Modal>
  )
}

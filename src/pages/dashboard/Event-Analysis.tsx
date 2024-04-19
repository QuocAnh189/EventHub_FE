import { useForm, SubmitHandler } from 'react-hook-form'

const EventAnalysis = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit: SubmitHandler<any> = async (data: any) => {
    try {
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register('firstName')} />
        </div>
        <input {...register('lastName', { required: true })} />
        {errors.lastName && <p>Last name is required.</p>}
        <input {...register('age', { pattern: /\d+/ })} />
        {errors.age && <p>Please enter number for age.</p>}
        <input type='submit' />
      </form>
    </div>
  )
}

export default EventAnalysis

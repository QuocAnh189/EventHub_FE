import dataImg from '@assets/common/no_data.png'

interface NodataProp {
  text: string
  color?: string
}

const NotData = (props: NodataProp) => {
  const { color, text } = props
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center'>
      <img src={dataImg} alt='' />
      <p className={`text-${color ? color : 'black'}`}>
        Sorry, <span className='font-bold text-clifford'>{text}</span> is not available or data has not been updated
      </p>
    </div>
  )
}

export default NotData

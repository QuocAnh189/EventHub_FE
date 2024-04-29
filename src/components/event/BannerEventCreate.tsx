//component
import { ICreateEventPayload } from '@type/event'
import MediaDropPlaceholder from '@ui/MediaDropPlaceholder'

// hooks
import { UseFormSetValue } from 'react-hook-form'
import { BiTrash } from 'react-icons/bi'
import { toast } from 'react-toastify'

interface Props {
  coverImage: string
  subImage: string[]
  setActive: (value: number) => void
  setValue: UseFormSetValue<ICreateEventPayload>
}
const BannerEvent = (props: Props) => {
  const { setActive, setValue, coverImage, subImage } = props

  const converCoverImageToBase64 = (e: any) => {
    const image = URL.createObjectURL(e.target.files[0])
    setValue('coverImage', image!)

    // const reader = new FileReader()
    // reader.readAsDataURL(e.target.files[0])
    // reader.onload = () => {
    //   setValue('coverImage', reader.result!)
    // }
    // reader.onerror = (error) => {
    //   console.log(error)
    // }
  }

  const convertSubImageToBase64 = (e: any, index: number) => {
    const image = URL.createObjectURL(e.target.files[0])
    if (image) {
      const newSubImage: any = [...subImage]
      newSubImage[index] = image
      setValue('subImage', newSubImage)
    }

    // const reader = new FileReader()
    // reader.readAsDataURL(e.target.files[0])
    // reader.onload = () => {
    // const newSubImage: any = [...subImage]
    // newSubImage[index] = reader.result
    // setValue('subImage', newSubImage)
    // }
    // reader.onerror = (error) => {
    //   console.log(error)
    // }
  }

  const handleNextStep = () => {
    if (coverImage && subImage.some((image) => image)) {
      setActive(2)
    } else {
      toast.error('Please choose image for event')
    }
  }

  return (
    <div className='relative pt-10 pb-20 px-40 space-y-10 min-h-screen'>
      <h1 className='text-header font-semibold text-2xl '>Cover Images</h1>
      <div className='flex flex-col items-center gap-8'>
        <div className='relative w-4/5 h-[300px] flex items-center justify-center text-white rounded-xl border-[3px] border-textGray border-dashed bg 2xl:col-span-2'>
          <img
            loading='lazy'
            className={`absolute h-full w-full rounded-[8px] outline-none opacity-${coverImage ? '1' : '0'}`}
            src={coverImage}
          />
          <input
            aria-label=''
            title=''
            accept='image/*'
            type='file'
            className='h-full w-full bg-transparent rounded-xl hover:cursor-pointer z-[999] outline-none opacity-0'
            onChange={converCoverImageToBase64}
            alt='No avtar'
            onClick={(event: any) => (event.target.value = null)}
          />
          {!coverImage ? (
            // <div className='z-[998]'>
            <MediaDropPlaceholder text='CoverImage' />
          ) : (
            // </div>
            <div className='absolute z-[1000] hover:cursor-pointer right-4 bottom-4'>
              <BiTrash
                size={32}
                onClick={() => {
                  URL.revokeObjectURL(coverImage)
                  setValue('coverImage', '')
                }}
                color={coverImage ? 'white' : '#333'}
              />
            </div>
          )}
        </div>

        <h1 className='text-header font-semibold text-2xl '>Sub Image</h1>
        <div className='flex items-center gap-8'>
          {[0, 1, 2, 3].map((_, index) => (
            <div key={`subimage-${index}`} className='relative w-[200px] border-[2px] h-[100[px]] media-dropzone'>
              <img
                loading='lazy'
                className={`absolute h-full w-full rounded-[6px] outline-none opacity-${subImage[index] ? '1' : '0'}`}
                src={subImage[index]}
                alt=''
              />
              <input
                title=''
                accept='image/*'
                type='file'
                className={`absolute h-full w-full rounded-xl outline-none opacity-0 hover:cursor-pointer`}
                onChange={(e) => convertSubImageToBase64(e, index)}
                alt='No avtar'
              />
              {!subImage[index] ? (
                <div className='absolute'>
                  <MediaDropPlaceholder text='CoverImage' />
                </div>
              ) : (
                <div className='absolute z-[1000] hover:cursor-pointer right-4 bottom-4'>
                  <BiTrash
                    size={32}
                    onClick={() => {
                      const newSubImage: any = [...subImage]
                      newSubImage[index] = ''
                      setValue('subImage', newSubImage)
                    }}
                    color={subImage[index] ? 'white' : '#333'}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='absolute flex items-center gap-4 right-8'>
        <button
          className='btn bg-textGray hover:text-white'
          onClick={() => {
            setActive(0)
          }}
        >
          Go back
        </button>
        <button className=' btn btn--primary ' onClick={handleNextStep}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default BannerEvent

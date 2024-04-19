/* eslint-disable no-unused-vars */
//component
import DropFiles from '@components/DropFiles'
import MediaDropPlaceholder from '@ui/MediaDropPlaceholder'

// hooks
import { useForm, Controller } from 'react-hook-form'

interface Props {
  setActive: (value: number) => void
}
const BannerEvent = (props: Props) => {
  const { setActive } = props
  const { control } = useForm({})

  return (
    <div className='relative pt-10 pb-20 px-40 space-y-10 min-h-screen'>
      <h1 className='text-header font-semibold text-2xl '>Cover Images</h1>
      <div className='flex flex-col items-center gap-8'>
        <Controller
          name='image1'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <DropFiles
              wrapperClass='w-4/5 h-[300px] media-dropzone 2xl:col-span-2'
              onChange={(files: any) => field.onChange(files)}
            >
              <MediaDropPlaceholder />
            </DropFiles>
          )}
        />
        <div className='flex items-center gap-8'>
          <Controller
            name='image3'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <DropFiles
                wrapperClass='w-[200px] border-[2px] h-[100[px]] media-dropzone '
                onChange={(files: any) => field.onChange(files)}
              >
                <MediaDropPlaceholder />
              </DropFiles>
            )}
          />
          <Controller
            name='image3'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <DropFiles
                wrapperClass='w-[200px] h-[100[px]] media-dropzone'
                onChange={(files: any) => field.onChange(files)}
              >
                <MediaDropPlaceholder />
              </DropFiles>
            )}
          />
          <Controller
            name='image3'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <DropFiles
                wrapperClass='w-[200px] border-[2px] h-[100[px]] media-dropzone '
                onChange={(files: any) => field.onChange(files)}
              >
                <MediaDropPlaceholder />
              </DropFiles>
            )}
          />
          <Controller
            name='image3'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <DropFiles
                wrapperClass='w-[200px] border-[2px] h-[100[px]] media-dropzone '
                onChange={(files: any) => field.onChange(files)}
              >
                <MediaDropPlaceholder />
              </DropFiles>
            )}
          />
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
        <button
          className=' btn btn--primary '
          onClick={() => {
            setActive(2)
          }}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default BannerEvent

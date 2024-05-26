//hook
import { withTranslation } from 'react-i18next'

const AboutUs = ({ t }: any) => {
  return (
    <div className='container pt-14 text-header'>
      <div className='py-10'>
        <h1 className=' my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>{t('about us.title')}</h1>
        <p className='text-justify'>{t('about us.description_one')}</p>
        <br />
        <p>{t('about us.description_two')}</p>
      </div>
    </div>
  )
}

export default withTranslation('home')(AboutUs)

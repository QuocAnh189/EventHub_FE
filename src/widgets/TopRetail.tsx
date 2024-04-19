// components
import TopRetailCard from '@components/TopRetailCard'

const TopRetail = () => {
  return (
    <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-[26px] lg:grid-cols-4 2xl:col-span-4'>
      <TopRetailCard />
      <TopRetailCard />
      <TopRetailCard />
      <TopRetailCard />
    </div>
  )
}

export default TopRetail

import { useState } from 'react'
import { IoSearch } from 'react-icons/io5'

const SearchInput = () => {
  const [search, setSearch] = useState('')

  return (
    <form className='flex items-center gap-2'>
      <input
        type='text'
        placeholder='Search…'
        className='input input-bordered rounded-full'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className='flex items-center justify-center bg-primary rounded-full p-3'>
        <IoSearch size={24} color='white' />
      </button>
    </form>
  )
}
export default SearchInput

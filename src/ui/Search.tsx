/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'

interface Props {
  placeholder?: string
  query?: any
  setQuery?: (e: any) => void
  wrapperClass?: string
}
const Search = (props: Props) => {
  const { placeholder = 'Search...', query, wrapperClass } = props

  return (
    <div className={`relative ${wrapperClass || ''}`}>
      <input
        className='field-input !pr-[60px]'
        type='search'
        placeholder={placeholder}
        value={query}
        // onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className={`field-btn text-red !right-[40px] transition ${query ? 'opacity-100' : 'opacity-0'}`}
        // onClick={() => setQuery('')}
        aria-label='Clear all'
      >
        <i className='icon-xmark-regular' />
      </button>
      <button className='field-btn icon' aria-label='Search'>
        <i className='icon-magnifying-glass-solid' />
      </button>
    </div>
  )
}

Search.propTypes = {
  placeholder: PropTypes.string,
  query: PropTypes.string,
  setQuery: PropTypes.func,
  wrapperClass: PropTypes.string
}

export default Search

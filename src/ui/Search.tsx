/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { useState } from 'react'

interface Props {
  placeholder?: string
  wrapperClass?: string
}
const Search = (props: Props) => {
  const { placeholder = 'Search...', wrapperClass } = props

  const [query, setQuery] = useState<string>('')

  const handleSearchQueryEvent = () => {
    console.log(query)
  }

  return (
    <div className={`relative ${wrapperClass || ''}`}>
      <input
        className='field-input !pr-[60px]'
        type='search'
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className='field-btn icon' aria-label='Search' onClick={handleSearchQueryEvent}>
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

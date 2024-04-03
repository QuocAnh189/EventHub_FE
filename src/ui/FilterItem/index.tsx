/* eslint-disable no-unused-vars */
// styling
import styles from './styles.module.scss'

// utils
import PropTypes from 'prop-types'

interface Props {
  text: string
  qty: number
  value: string
  active: string
  onClick: (value: string) => void
}

const FilterItem = (props: Props) => {
  const { text, qty = 0, value, active, onClick } = props

  return (
    <button className={`${styles.button} ${value === active ? styles.active : ''}`} onClick={() => onClick(value)}>
      <span className={`${styles.text} subheading-2`}>{text}</span>
      <span className='text-sm text-highlight-inverse'>({qty})</span>
    </button>
  )
}

FilterItem.propTypes = {
  text: PropTypes.string.isRequired,
  qty: PropTypes.number,
  value: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default FilterItem

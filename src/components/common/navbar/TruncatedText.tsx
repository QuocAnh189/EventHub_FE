// utils
import PropTypes from 'prop-types'

const TruncatedText = ({ text, lines = 2, className, width }: any) => {
  return (
    <span className={className ? className : ''}>
      <p className={`truncate w-${width} line-clamp-${lines}`}>{text}</p>
    </span>
  )
}

TruncatedText.propTypes = {
  text: PropTypes.string.isRequired,
  lines: PropTypes.number,
  className: PropTypes.string,
  width: PropTypes.number.isRequired
}

export default TruncatedText

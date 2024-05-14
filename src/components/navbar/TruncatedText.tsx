// utils
import PropTypes from 'prop-types'

interface Props {
  text: string
  lines?: number
  className?: string
  width?: number
}

const TruncatedText = (props: Props) => {
  const { text, lines = 1, className, width } = props
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

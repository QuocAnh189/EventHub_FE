// components
import Truncate from 'react-truncate'

// hooks
import { useState, useEffect } from 'react'

// utils
import PropTypes from 'prop-types'

const TruncatedText = ({ text, lines = 2, className, width }: any) => {
  const [truncated, setTruncated] = useState<boolean>(false)
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  return (
    <span className={className ? className : ''}>
      {mounted && (
        <Truncate lines={lines} ellipsis={<span>...</span>} width={width} onTruncate={() => setTruncated(!truncated)}>
          {text}
        </Truncate>
      )}
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

// components
import { Helmet } from 'react-helmet'

// utils
import PropTypes from 'prop-types'

interface Props {
  title: string
}

export const DocumentTitle = (props: Props) => {
  const { title } = props
  return (
    <Helmet>
      <title>{title} | React E-commerce Dashboard Template</title>
    </Helmet>
  )
}

DocumentTitle.propTypes = {
  title: PropTypes.string.isRequired
}

// components
import { Helmet } from 'react-helmet'

// utils
import PropTypes from 'prop-types'

export const DocumentTitle = ({ title }: any) => {
  return (
    <Helmet>
      <title>{title} | React E-commerce Dashboard Template</title>
    </Helmet>
  )
}

DocumentTitle.propTypes = {
  title: PropTypes.string.isRequired
}

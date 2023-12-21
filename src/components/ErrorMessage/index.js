import PropTypes from 'prop-types'
import React from 'react'

import { ErrorMessageStyles } from './styles'

function ErrorMessage({ children }) {
  return <ErrorMessageStyles>{children}</ErrorMessageStyles>
}

export default ErrorMessage

ErrorMessage.propTypes = {
  children: PropTypes.string
}

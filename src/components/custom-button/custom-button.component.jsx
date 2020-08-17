import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ value, ...otehrProps }) => (
  <button className='custom-button' {...otehrProps}>{value}</button>
)

export default CustomButton

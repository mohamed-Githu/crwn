import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ value, isGoogle,...otehrProps }) => (
  <button 
    className={`${isGoogle && 'custom-button--google '} custom-button`} 
    {...otehrProps}
  >
    {value}
  </button>
)

export default CustomButton

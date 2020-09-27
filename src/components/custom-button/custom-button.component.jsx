import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({ value, isGoogle, inverted, ...otehrProps }) => (
  <button 
    className={`${isGoogle && 'custom-button--google '} 
      ${inverted && 'custom-button--inverted '} 
      custom-button`
    } 
    {...otehrProps}
  >
    {value}
  </button>
)

export default CustomButton

import React from 'react'

import './form-input.styles.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="form-input">
    <input className="form-input__input" onChange={handleChange} {...otherProps}/>
    <label className={`${otherProps.value && 'form-input__label--focus '}form-input__label`}>
      {label}
    </label>
  </div>
)

export default FormInput

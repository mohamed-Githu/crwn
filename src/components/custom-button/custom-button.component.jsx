import React from 'react'

import { ButtonContainer } from './custom-button.styles'

const CustomButton = ({ value, ...props }) => <ButtonContainer {...props}>{value}</ButtonContainer>

export default CustomButton

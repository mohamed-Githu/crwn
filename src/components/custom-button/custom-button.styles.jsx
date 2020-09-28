import styled, { css } from 'styled-components'

const buttonStyles = css`
  background-color: black;
  color: white;

  &:hover {
    color: black;
    background-color: white;
  }
`

const invertedButtonStyles = css`
  color: black;
  background-color: white;

  &:hover {
    background-color: black;
    color: white;
  }
`

const googleButtonStyles = css`
  background-color: #4285f4;

  &:hover {
    background-color: #357ae8;
    color: #fff;
  }
`

const getButtonStyles = ({ inverted, isGoogle }) => {
  if (isGoogle) {
    return googleButtonStyles;
  }

  return inverted ? invertedButtonStyles : buttonStyles;
}

export const ButtonContainer = styled.button`
  border: 1px solid currentColor;
  height: 5rem;
  padding: 0 2rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${getButtonStyles}
`
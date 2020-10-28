import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: #fff;
  height: 7rem;
  display: flex;
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  margin-right: auto;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 50em) {
    height: 6rem;
  }

  @media screen and (max-width: 25em) {
    padding: 0;
  }
`

export const LogoContainer = styled.div`
  box-sizing: content-box;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const OptionsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

export const OptionLink = styled(Link)`
  padding: 1rem 4rem;
  font-size: 2rem;
  cursor: pointer;

  @media screen and (max-width: 50em) {
    padding: 1rem 2rem;
  }

  @media screen and (max-width: 34.375em) {
    padding: 1rem;
    font-size: 1.5rem;
  }
`

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  font-size: 1.6rem;
  background-color: #fff;
  height: 7rem;
  width: calc(100% + 12rem);
  display: flex;
  padding: 0 3rem;
  justify-content: space-between;
  align-items: center;
  margin-left: -6rem;
  margin-bottom: 1.5rem;
  position: sticky;
  top: 0;
  z-index: 10;
`

export const LogoContainer = styled.div`
  box-sizing: content-box;
  height: 100%;
  width: 7rem;
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const OptionsContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const OptionLink = styled(Link)`
  padding: 1rem 1.5rem;
  font-size: 2rem;
  cursor: pointer;
`

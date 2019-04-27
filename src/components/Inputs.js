import styled from 'styled-components'
import { colors, fonts } from './theme'

export const TextInput = styled.input`
  width: 100%;
  margin-top: 35px;
  padding: 20px;
  border: 3px solid ${props => props.color || colors.secondary};
  background: none;
  color: ${props => props.color || colors.secondary};
  font-family: ${fonts.secondary};

  &:placeholder {
    color: inherit;
    font-family: inherit;
  }

  @media (max-width: 680px) {
    width: 85vw;
  }
`

export const SubmitBtn = styled.button`
  width: 100%;
  background: ${colors.secondary};
  border: 3px solid ${colors.secondary};
  font-family: ${fonts.main};
  text-transform: uppercase;
  margin-top: 35px;
  padding: 20px 30px;
  color: border: 4px solid ${props => props.color || colors.main};
  cursor: pointer;
  transition: 0.3s ease-out;

  &:hover {
    background: ${props => props.hover || colors.main};
    color: ${props => props.hover || colors.secondary};
  }

  @media (max-width: 680px) {
    width: 85vw;
  }
`
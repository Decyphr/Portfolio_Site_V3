import styled from 'styled-components'
import { colors, fonts } from './theme'

export const TextInput = styled.input`
  width: 290px;
  margin-top: 35px;
  padding: 8px;
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
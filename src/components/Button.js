import styled from 'styled-components'
import { fonts, colors } from './theme';

export const Button = styled.button`
  width: 275px;
  border: 4px solid ${props => props.color || colors.main};
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

export const SocialMedia = styled.a`
  opacity: 1;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`

export const ProjectLink = styled.a`
  text-decoration: none;

  &:hover {
    background: #070707;
  }
`

export const HomeButton = styled.button`
  font-family: ${fonts.main};
  font-size: 35px;
  letter-spacing: 1px;
  background: none;
  border: none;
  padding: 0;
  border-bottom: 3px solid transparent;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid ${colors.main};
  }
`
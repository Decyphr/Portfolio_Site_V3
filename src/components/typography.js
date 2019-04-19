import styled from 'styled-components'
import { colors, fonts } from '../components/theme'

export const Heading = styled.h1`
  font-family: ${fonts.main};
  font-size: ${props => props.size || '2.25em'};
  font-weight: 500;
  text-transform: uppercase;
  text-align: ${props => props.align || 'left'};
  letter-spacing: 10px;
  line-height: ${props => props.leading || 'auto'};
  color: ${props => props.color || colors.main};

  &:after {
    content: '';
    display: block;
    width: 75px;
    border: 4px solid ${props => props.color || colors.main};
    margin: 35px ${props => props.align === 'center' ? 'auto' : 0 };
  }
`;

export const Paragraph = styled.p`
  font-family: ${fonts.secondary};
  font-size: .95em;
  color: ${props => props.color || colors.main};
  text-align: ${props => props.align || 'left'};
`;

// project specific

export const ProjectTitle = styled.div`
  font-family: ${fonts.main};
  font-size: 20px;
  color: ${colors.secondary};
  text-align: center;
  margin: auto;
`
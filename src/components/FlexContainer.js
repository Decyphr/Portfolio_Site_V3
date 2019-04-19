import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.justify || 'space-between'};
  align-items: ${props => props.align || 'center'};

  @media (max-width: 680px) {
    justify-content: ${props => props.justify || 'space-around'};
  }
`

export const HeadingContainer = styled.div`
  margin: 0 auto;
  max-width: 680px;
  padding: 0px 1.0875rem 1.45rem;
  paddingTop: 0;
`

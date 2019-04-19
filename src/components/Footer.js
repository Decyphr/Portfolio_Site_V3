import React, { Component } from 'react'
import styled from 'styled-components'

import { colors, fonts } from './theme'

class Footer extends Component {
  render() {
    return (
      <Container>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Container>
    )
  }
}

export default Footer

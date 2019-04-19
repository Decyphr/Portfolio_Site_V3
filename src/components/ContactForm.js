import React, { Component } from 'react'
import styled from 'styled-components'

import { FlexContainer } from './FlexContainer'
import { TextInput } from './Inputs'
import { Button } from './Button'

import { colors, fonts } from './theme'

class ContactForm extends Component {
  render() {
    return (
      <FlexContainer>
        <TextInput type='text' name='email' placeholder='Email' />
        <TextInput type='text' name='about' placeholder='Project Idea...' />
        <SubmitBtn type='submit'>Send it</SubmitBtn>
      </FlexContainer>
    )
  }
}

const SubmitBtn = styled(Button)`
  width: 100%;
  background: ${colors.secondary};
  border: 3px solid ${colors.secondary};
  font-family: ${fonts.main};
`

export default ContactForm

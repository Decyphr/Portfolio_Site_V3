import React, { Component } from 'react'
import styled from 'styled-components'

import { FlexContainer } from './FlexContainer'
import { TextInput } from './Inputs'
import { Button } from './Button'

import { colors, fonts } from './theme'

class ContactForm extends Component {
  render() {
    return (
      <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
        <p style={{ visibility: 'hidden', height: 0 }}>
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
        <FlexContainer>
          <TextInput type='text' name='email' placeholder='Email' />
          <TextInput type='text' name='about' placeholder='Project Idea...' />
          <SubmitBtn type='submit'>Send it</SubmitBtn>
        </FlexContainer>
      </form>
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

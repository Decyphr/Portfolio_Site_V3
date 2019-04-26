import React, { Component } from 'react'

import { FlexContainer } from './FlexContainer'
import { TextInput, SubmitBtn } from './Inputs'

class ContactForm extends Component {
  render() {
    return (
      <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
        <p style={{ visibility: 'hidden', height: 0 }}>
          <input name="bot-field" />
        </p>
        <FlexContainer>
          <TextInput type='text' name='email' placeholder='Email' />
          <TextInput type='text' name='about' placeholder='Project Idea...'/>
          <SubmitBtn type='submit' value="Send it" />
        </FlexContainer>
      </form>
    )
  }
}

export default ContactForm

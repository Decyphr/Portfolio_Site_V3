import React, { Component } from 'react'

import { FlexContainer } from './FlexContainer'
import { TextInput, SubmitBtn } from './Inputs'

class ContactForm extends Component {
  render() {
    return (
      <form name="contact" method="POST" data-netlify="true">
        <FlexContainer>
          <TextInput type='text' name='email' placeholder='Email' />
          <TextInput type='text' name='about' placeholder='Project Idea...'/>
          <SubmitBtn type='submit' name='submit' value="Send it" />
        </FlexContainer>
      </form>
    )
  }
}

export default ContactForm

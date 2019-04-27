import React, { Component } from 'react'

import { FlexContainer } from './FlexContainer'
import { TextInput, SubmitBtn } from './Inputs'

class ContactForm extends Component {
  render() {
    return (
      <form name="contact" method="POST" data-netlify="true">
        <FlexContainer>
          <TextInput type='email' name='email' placeholder='Email' value={(e) => e.target.value} />
          <TextInput type='text' name='name' placeholder='Project Idea...' value={(e) => e.target.value}/>
          <SubmitBtn type='submit'>Send It</SubmitBtn>
        </FlexContainer>
      </form>
    )
  }
}

export default ContactForm

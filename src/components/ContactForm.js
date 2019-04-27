import React, { Component } from 'react'

import { FlexContainer } from './FlexContainer'
import { TextInput, SubmitBtn } from './Inputs'

class ContactForm extends Component {
  state = {
    email: '',
    project: ''
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })

  }

  render() {
    return (
      <form name="contact" action="POST" data-netlify="true">
        <FlexContainer>
          <TextInput
            name='name'
            onChange={this.handleChange} 
            type='text'
            placeholder='Name' 
          />
          <TextInput
            name='email'
            onChange={this.handleChange} 
            type='email'
            placeholder='Email' 
          />
          <TextInput 
            name='project'
            onChange={this.handleChange} 
            type='text' 
            placeholder='Project Idea...'
          />
          <SubmitBtn type='submit'>Send It</SubmitBtn>
        </FlexContainer>
      </form>
    )
  }
}

export default ContactForm

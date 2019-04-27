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
      <form name='project' method='POST' data-netlify='true'>
        <FlexContainer>
          <TextInput onChange={this.handleChange} type="email" name="email" placeholder='Email' value={this.state.email} />
          <TextInput onChange={this.handleChange} type='text' name='project' placeholder='Project Idea...' value={this.state.project}/>
          <SubmitBtn type='submit'>Send It</SubmitBtn>
        </FlexContainer>
      </form>
    )
  }
}

export default ContactForm

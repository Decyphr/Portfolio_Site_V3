import React, { Component } from 'react'

import { FlexContainer } from './FlexContainer'
import { TextInput, SubmitBtn } from './Inputs'

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    project: '',
    submitted: false
  }

  handleChange = e => {
    e.preventDefault()

    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <form action="/success" name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
        <input name="bot-field" style={{ visibility: "hidden" }} />
        <FlexContainer>
          <TextInput
            name="name"
            type="text"
            onChange={this.handleChange}
            placeholder="Name"
          />
          <TextInput
            name="email"
            type="email"
            onChange={this.handleChange}
            placeholder="Email"
            required
          />
          <TextInput 
            name="project"
            type="text"
            onChange={this.handleChange}
            placeholder="Project Idea..."
          />
          <SubmitBtn type='submit'>Send It</SubmitBtn>
        </FlexContainer>
      </form>
    )
  }
}

export default ContactForm

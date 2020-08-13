import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { palindromeNumber } from './palindrome_number'

export interface Props {}
export interface State {
  input: number
}

export class Input extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { input: 12321 }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event: { target: { name: string; value: string | number } }) {
    const target = event.target
    const value = target.value
    const name = target.name
    const newState = { [name]: value } as Pick<State, keyof State>

    this.setState(newState)
    console.log('Input Updated ' + name + ': ' + event.target.value)
  }

  handleSubmit(event: { preventDefault: () => void }) {
    console.log('Number was submitted: ' + this.state.input)
    const answer = palindromeNumber(parseInt(this.state.input.toString()))
    console.log(answer)
    let not = ''
    if (answer) {
      not = 'a'
    } else {
      not = 'not a'
    }
    alert(this.state.input + ' is ' + not + ' palindrome.')
    event.preventDefault()
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control
              name="input"
              type="number"
              value={this.state.input}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    )
  }
}

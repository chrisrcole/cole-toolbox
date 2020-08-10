import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { reverseInteger } from './reverse_integer'

export interface Props {}
export interface State {
  inputNumber: number
}

export class ReverseIntegerInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { inputNumber: 123 }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event: { target: { name: string; value: number | string } }) {
    const target = event.target
    const value = target.value
    const name = target.name
    const newState = { [name]: value } as Pick<State, keyof State>

    this.setState(newState)
    console.log('Input Updated ' + name + ': ' + value)
  }

  handleSubmit(event: { preventDefault: () => void }) {
    console.log('Number was submitted: ' + this.state.inputNumber)
    const answer = reverseInteger(this.state.inputNumber)
    alert('The Reversed Integer is: ' + answer)
    event.preventDefault()
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control
              name="inputNumber"
              type="number"
              value={this.state.inputNumber}
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

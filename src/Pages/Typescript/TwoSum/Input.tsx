import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { twoSum } from './two_sum'

export interface Props {}
export interface State {
  numbers: string
  targetSum: number
}

export class TwoSumInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { numbers: '1,2,4,6,8,10', targetSum: 14 }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event: { target: { name: string; value: string | number } }) {
    const target = event.target
    const value = target.value
    const name = target.name
    const newState = { [name]: value } as Pick<State, keyof State>

    this.setState(newState)
    console.log('Value Changed')
  }

  handleSubmit(event: { preventDefault: () => void }) {
    console.log('Numbers were submitted: ' + this.state.numbers)
    console.log('Target Sum was submitted: ' + this.state.targetSum)
    const numbers = this.state.numbers.split(',').map(Number)
    const answer = twoSum(numbers, this.state.targetSum)
    console.log(
      'Target Numbers: ' + numbers[answer[0]] + ' + ' + numbers[answer[1]]
    )
    alert('The Indeces are: [' + answer?.join(',') + ']')
    event.preventDefault()
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control
              name="numbers"
              as="textarea"
              rows={2}
              value={this.state.numbers}
              onChange={this.handleChange}
            />
            <br />
            <Form.Control
              name="targetSum"
              type="number"
              value={this.state.targetSum}
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

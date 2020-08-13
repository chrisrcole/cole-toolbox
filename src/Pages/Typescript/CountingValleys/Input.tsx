import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { countingValleys } from './counting_valleys'

export interface Props {}
export interface State {
  path: string
}

export class Input extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { path: 'UDDDUDUU' }

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
    console.log('Steps: ' + this.state.path.split('').length)
    console.log('Path was submitted: ' + this.state.path)

    const output = countingValleys(this.state.path)
    const num_valleys = output[0]
    const map = output[1]
    console.log('Number of valleys: ' + num_valleys)
    alert('Number of valleys: ' + num_valleys + '\nThe map will now display')
    alert(map)
    event.preventDefault()
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Control
              name="path"
              as="textarea"
              rows={2}
              value={this.state.path}
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

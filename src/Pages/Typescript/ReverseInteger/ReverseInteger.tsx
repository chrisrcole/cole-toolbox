import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ReverseIntegerProblem } from './Problem'
import { ReverseIntegerCode } from './Code'
import { ReverseIntegerInput } from './Input'

export class ReverseInteger extends React.Component {
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <ReverseIntegerProblem />
          </Col>
          <Col>
            <ReverseIntegerCode />
            <br></br>
            <ReverseIntegerInput />
          </Col>
        </Row>
      </Container>
    )
  }
}

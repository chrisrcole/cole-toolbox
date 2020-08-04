import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { TwoSumProblem } from './Problem'
import { TwoSumCode } from './Code'

export class TwoSum extends React.Component {
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <TwoSumProblem />
            <TwoSumCode />
          </Col>
          <Col>
            <TwoSumCode />
          </Col>
        </Row>
      </Container>
    )
  }
}

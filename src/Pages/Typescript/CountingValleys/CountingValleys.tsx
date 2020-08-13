import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Problem } from './Problem'
import { Code } from './Code'
import { Input } from './Input'

export class CountingValleys extends React.Component {
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <Problem />
          </Col>
          <Col>
            <Code />
            <br></br>
            <Input />
          </Col>
        </Row>
      </Container>
    )
  }
}

import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export class ReverseIntegerProblem extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>2. Reverse 32-Bit Integer</h1>
          <div>
            <p>Given a 32-bit signed integer, reverse digits of an integer.</p>

            <p>
              <strong>Note:</strong>
              Assume we are dealing with an environment which could only store
              integers within the 32-bit signed integer range: [−2<sup>31</sup>
              ,&nbsp; 2<sup>31&nbsp;</sup>− 1]. For the purpose of this problem,
              assume that your function returns 0 when the reversed integer
              overflows.
            </p>

            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="info" eventKey="0">
                    Example 1:
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <strong>Input:</strong> 123
                    <br></br>
                    <strong>Output:</strong> 321
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="info" eventKey="0">
                    Example 2:
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <strong>Input:</strong> -123
                    <br></br>
                    <strong>Output:</strong> -321
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="info" eventKey="0">
                    Example 3:
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <strong>Input:</strong> 120
                    <br></br>
                    <strong>Output:</strong> 21
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    )
  }
}

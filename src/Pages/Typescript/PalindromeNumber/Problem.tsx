import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export class Problem extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>3. Palindrome Number</h1>
          <div>
            <div>
              <p>
                Determine whether an integer is a palindrome. An
                integer&nbsp;is&nbsp;a&nbsp;palindrome when it&nbsp;reads the
                same backward as forward.
              </p>

              <p>
                <strong>Follow up:</strong>
              </p>

              <p>
                Coud you solve&nbsp;it without converting the integer to a
                string?
              </p>
            </div>

            <Accordion defaultActiveKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="info" eventKey="0">
                    Example 1:
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <pre>
                      <strong>Input:</strong> 121
                      <br></br>
                      <strong>Output:</strong> true
                    </pre>
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
                    <pre>
                      <strong>Input:</strong> -121
                      <br></br>
                      <strong>Output:</strong> false
                      <br></br>
                      <strong>Explanation:</strong> From left to right, it reads
                      -121. From right to left, it becomes 121-. Therefore it is
                      not a palindrome.
                    </pre>
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
                    <pre>
                      <strong>Input:</strong> 10
                      <br></br>
                      <strong>Output:</strong> false
                      <br></br>
                      <strong>Explanation:</strong> Reads 01 from right to left.
                      Therefore it is not a palindrome.
                    </pre>
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

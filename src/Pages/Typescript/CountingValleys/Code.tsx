import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Gist from 'react-gist'
import './Gist.css'

export class Code extends React.Component {
  render() {
    return (
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="info" eventKey="0">
              My Solution:
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Gist
                id="69dddc9df0457aedb7ce668b2deacd30"
                file="counting_valleys.ts"
              />
              <Gist
                id="69dddc9df0457aedb7ce668b2deacd30"
                file="counting_valleys.ts"
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    )
  }
}

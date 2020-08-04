import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export class TwoSumProblem extends React.Component {
  render() {
    return (
      <div>
        <h1>1. Two Sum</h1>
        <div>
          <p>
            Given an array of integers, return <strong>indices</strong> of the
            two numbers such that they add up to a specific target.
          </p>

          <p>
            You may assume that each input would have{' '}
            <strong>
              <em>exactly</em>
            </strong>{' '}
            one solution, and you may not use the <em>same</em> element twice.
          </p>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  Example:
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Given nums = [2, 7, 11, 15], target = 9, Because nums[
                  <strong>0</strong>] + nums[<strong>1</strong>] = 2 + 7 = 9,
                  return [<strong>0</strong>, <strong>1</strong>].
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    )
  }
}

import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { FaLaptopCode } from 'react-icons/fa'

export class Header extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>
          Hello, World! <FaLaptopCode />
        </h1>
        <div>
          <p>
            This project is setup for me to learn all aspects of development and
            continually aquire skills. This is intended for me to study/practice
            these problems and reinforce proper algorithm structure.
          </p>
          <p>
            Problems are sourced from{' '}
            <Button
              variant="primary"
              href="https://leetcode.com/"
              target="_blank"
            >
              Leetcode
            </Button>{' '}
            and{' '}
            <Button
              variant="secondary"
              href="https://hackerrank.com/"
              target="_blank"
            >
              HackerRank
            </Button>
          </p>
        </div>
      </Jumbotron>
    )
  }
}

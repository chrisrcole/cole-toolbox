import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

export class Header extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This project is setup for me to learn all aspects of development and
          continually aquire skills.
        </p>
      </Jumbotron>
    )
  }
}

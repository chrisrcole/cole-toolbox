import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { FaKeyboard } from 'react-icons/fa'

export class Header extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>
          Hello, Typescript! <FaKeyboard />
        </h1>
        <p>
          Here is where completed Typescript challenges will be. We will be able
          to run inputs and view the outputs as well as the source of the code.
        </p>
      </Jumbotron>
    )
  }
}

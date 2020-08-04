import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

export function Header() {
  return (
    <Container>
      <Jumbotron fluid={true}>
        <h1 className="header">Chris Cole's Learning Toolbox</h1>
      </Jumbotron>
    </Container>
  )
}

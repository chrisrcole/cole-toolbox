import React from 'react'
import Container from 'react-bootstrap/Container'
import { Header } from './Header/Header'
import { ProgressTable } from './Projects/Table'

export class Home extends React.Component {
  render() {
    return (
      <Container fluid={true}>
        <Header />
        <ProgressTable />
      </Container>
    )
  }
}

import React from 'react'
import { TypescriptTabs } from './Tabs'
import Container from 'react-bootstrap/Container'
import { Header } from './Header'

export class Typescript extends React.Component {
  render() {
    return (
      <Container fluid={true}>
        <Header />
        <TypescriptTabs />
      </Container>
    )
  }
}

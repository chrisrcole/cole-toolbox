import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Brand } from './Brand'
import { ThemeType } from '../Theme/Theme'

export interface Props {
  bg: ThemeType
  variant: ThemeType
}

export class NavigationBar extends React.Component<Props, object> {
  render() {
    const { bg, variant } = this.props

    return (
      <Navbar bg={bg} variant={variant}>
        <Brand />
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/project1">Project 1</Nav.Link>
          <Nav.Link href="/project2">Project 2</Nav.Link>
        </Nav>
      </Navbar>
    )
  }
}

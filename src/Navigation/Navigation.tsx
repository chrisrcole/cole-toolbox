import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Switch, Route } from 'react-router-dom'
import { Brand } from './Brand'
import { ThemeType } from '../Theme/Theme'
import { Home } from '../Pages/Home/Home'
import { Project1 } from '../Pages/Project1/Project1'
import { Project2 } from '../Pages/Project2/Project2'

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

export class NavigationSwitch extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/project1">
          <Project1 />
        </Route>
        <Route path="/project2">
          <Project2 />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    )
  }
}

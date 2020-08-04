import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Switch, Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

import './Navigation.css'
import { Brand } from './Brand'
import { Search } from './Search'
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
      <Navbar
        collapseOnSelect={true}
        expand="md"
        bg={bg}
        variant={variant}
        sticky="top"
      >
        <Brand />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/project1">
              <Nav.Link>Project 1</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/project2">
              <Nav.Link>Project 2</Nav.Link>
            </LinkContainer>
          </Nav>
          <Search variant={variant} />
        </Navbar.Collapse>
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

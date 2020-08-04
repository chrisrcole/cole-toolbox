import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../logo.svg'
import { LinkContainer } from 'react-router-bootstrap'

export function Brand() {
  return (
    <LinkContainer to="/">
      <Navbar.Brand>
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Chris Cole
      </Navbar.Brand>
    </LinkContainer>
  )
}

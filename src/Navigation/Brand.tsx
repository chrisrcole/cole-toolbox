import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../logo.svg'

export function Brand() {
  return (
    <Navbar.Brand href="/">
      <img
        alt=""
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Chris Cole
    </Navbar.Brand>
  )
}

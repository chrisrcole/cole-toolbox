import React from 'react'
import Container from 'react-bootstrap/Container'
import { HashRouter as Router } from 'react-router-dom'
// import { Header } from './Header/Header'
import { NavigationBar, NavigationSwitch } from './Navigation/Navigation'
import { theme } from './Theme/Theme'

// import ButtonsShowcase from './showcases/Buttons'
// import ToastsShowcase from './showcases/Toasts'

export function App() {
  return (
    <Container fluid={true}>
      <Router basename="/cole-toolbox">
        <header>
          {/* <Header /> */}
          <NavigationBar bg={theme} variant={theme} />
        </header>
        <Container fluid={true}>
          <NavigationSwitch />
        </Container>
      </Router>
    </Container>
  )
}

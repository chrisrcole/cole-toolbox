import React from 'react'
import Container from 'react-bootstrap/Container'
// import { Header } from './Header/Header'
import { NavigationBar } from './Navigation/Navigation'
import { theme } from './Theme/Theme'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Project1 } from './Pages/Project1/Project1'
import { Project2 } from './Pages/Project2/Project2'

// import ButtonsShowcase from './showcases/Buttons'
// import ToastsShowcase from './showcases/Toasts'

export function App() {
  return (
    <Container fluid={true}>
      <Router>
        <header>
          {/* <Header /> */}
          <NavigationBar bg={theme} variant={theme} />
        </header>
        <Container fluid={true}>
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
        </Container>
      </Router>
    </Container>
  )
}

import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { NavigationBar, NavigationSwitch } from './Navigation/Navigation'
import { theme } from './Theme/Theme'
import './Theme/Theme.css'

// import ButtonsShowcase from './showcases/Buttons'
// import ToastsShowcase from './showcases/Toasts'

export function App() {
  return (
    <Router basename="/cole-toolbox">
      <NavigationBar bg={theme} variant={theme} />
      <div className="main-page">
        <NavigationSwitch />
      </div>
    </Router>
  )
}

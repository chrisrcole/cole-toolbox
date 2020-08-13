import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { NavigationBar, NavigationSwitch } from './Navigation/Navigation'
import { theme } from './Theme/Theme'
import './Theme/Theme.css'

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

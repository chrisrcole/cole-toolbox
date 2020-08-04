import React from 'react'
import { PythonTabs } from './Tabs'
import Container from 'react-bootstrap/Container'
import { Header } from './Header'

// export interface Props {
//   key: string
//   setKey: ThemeType
// }

export class Python extends React.Component {
  render() {
    return (
      <Container fluid={true}>
        <Header />
        <PythonTabs />
      </Container>
    )
  }
}

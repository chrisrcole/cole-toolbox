import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { TwoSum } from './TwoSum/TwoSum'

export class PythonTabs extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="TwoSum">
        <Tab eventKey="TwoSum" title="Two Sum">
          <TwoSum />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <TwoSum />
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled={true}>
          <TwoSum />
        </Tab>
      </Tabs>
    )
  }
}

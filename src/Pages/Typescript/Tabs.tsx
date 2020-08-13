import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { TwoSum } from './TwoSum/TwoSum'
import { ReverseInteger } from './ReverseInteger/ReverseInteger'
import { PalindromeNumber } from './PalindromeNumber/PalindromeNumber'
import { CountingValleys } from './CountingValleys/CountingValleys'

export class TypescriptTabs extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="TwoSum">
        <Tab eventKey="TwoSum" title="Two Sum">
          <TwoSum />
        </Tab>
        <Tab eventKey="ReverseInteger" title="ReverseInteger">
          <ReverseInteger />
        </Tab>
        <Tab eventKey="PalindromeNumber" title="PalindromeNumber">
          <PalindromeNumber />
        </Tab>
        <Tab eventKey="CountingValleys" title="CountingValleys">
          <CountingValleys />
        </Tab>
      </Tabs>
    )
  }
}

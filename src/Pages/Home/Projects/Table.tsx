import React from 'react'
import Table from 'react-bootstrap/Table'
import ProgressBar from 'react-bootstrap/ProgressBar'

export class ProgressTable extends React.Component {
  render() {
    return (
      <Table striped={true} bordered={true} hover={true}>
        <thead>
          <tr>
            <th>#</th>
            <th>Progress</th>
            <th>Project</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <ProgressBar>
                <ProgressBar variant="success" now={100} key={1} />
                <ProgressBar
                  animated={true}
                  variant="warning"
                  now={0}
                  key={2}
                />
                <ProgressBar variant="info" now={0} key={3} />
              </ProgressBar>
            </td>
            <td>Build React Web App</td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <ProgressBar>
                <ProgressBar variant="success" now={25} key={1} />
                <ProgressBar
                  animated={true}
                  variant="warning"
                  now={75}
                  key={2}
                />
                <ProgressBar variant="info" now={0} key={3} />
              </ProgressBar>
            </td>
            <td>Problem/Python Setup</td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

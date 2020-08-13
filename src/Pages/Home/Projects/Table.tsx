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
            <td>Problem/Typescript Setup</td>
          </tr>
          <tr>
            <td>3</td>
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
            <td>
              <a href="https://leetcode.com/problems/two-sum" target="blank">
                Two Sum Problem
              </a>
            </td>
          </tr>
          <tr>
            <td>4</td>
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
            <td>
              <a
                href="https://leetcode.com/problems/reverse-integer"
                target="blank"
              >
                Reverse Integer Problem
              </a>
            </td>
          </tr>
          <tr>
            <td>5</td>
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
            <td>
              <a
                href="https://leetcode.com/problems/palindrome-number"
                target="blank"
              >
                Palindrome Number
              </a>
            </td>
          </tr>
          <tr>
            <td>5</td>
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
            <td>
              <a
                href="https://www.hackerrank.com/challenges/counting-valleys/problem"
                target="blank"
              >
                Counting Valleys
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

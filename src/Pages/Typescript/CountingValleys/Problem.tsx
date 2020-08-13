import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export class Problem extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>4. Counting Valleys</h1>
          <div>
            <p>
              Gary is an avid hiker. He tracks his hikes meticulously, paying
              close attention to small details like topography. During his last
              hike he took exactly steps. For every step he took, he noted if it
              was an <em>uphill</em>,U , or a D <em>downhill</em>, step. Gary's
              hikes start and end at sea level and each step up or down
              represents a unit change in altitude. We define the following
              terms:
            </p>

            <ul>
              <li>
                A <em>mountain</em> is a sequence of consecutive steps{' '}
                <em>above</em> sea level, starting with a step <em>up</em> from
                sea level and ending with a step <em>down</em> to sea level.{' '}
              </li>
              <li>
                A <em>valley</em> is a sequence of consecutive steps{' '}
                <em>below</em> sea level, starting with a step <em>down</em>{' '}
                from sea level and ending with a step <em>up</em> to sea level.
              </li>
            </ul>

            <p>
              Given Gary's sequence of <em>up</em> and <em>down</em> steps
              during his last hike, find and print the number of{' '}
              <em>valleys</em> he walked through.{' '}
            </p>

            <p>
              For example, if Gary's path is s=[DDUUUUDD], he first enters a
              valley units 2 deep. Then he climbs out an up onto a mountain 2
              units high. Finally, he returns to sea level and ends his hike.{' '}
            </p>

            <p>
              <strong>Function Description</strong>{' '}
            </p>

            <p>
              Complete the <em>countingValleys</em> function in the editor
              below. It must return an integer that denotes the number of
              valleys Gary traversed.{' '}
            </p>

            <p>countingValleys has the following parameter(s): </p>

            <ul>
              <li>
                <em>n</em>: the number of steps Gary takes{' '}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

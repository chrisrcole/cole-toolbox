import React from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { FaSearch } from 'react-icons/fa'
import { ThemeType } from '../Theme/Theme'

export interface Props {
  variant: ThemeType
}

export class Search extends React.Component<Props, object> {
  render() {
    const { variant } = this.props

    return (
      <Form inline={true}>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant={variant}>
          <FaSearch />
        </Button>
      </Form>
    )
  }
}

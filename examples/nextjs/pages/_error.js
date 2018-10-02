import React from 'react'
import ErrorPage from 'next/error'

export default class Page extends React.Component {
  render () {
    return <ErrorPage statusCode={this.props.statusCode || '¯\\_(ツ)_/¯'} />
  }
}

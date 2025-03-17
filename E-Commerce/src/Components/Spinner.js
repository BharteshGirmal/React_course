import React, { Component } from 'react'
import SpinnerText from './Spinner.gif';
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center mx-2 mb-2'>
        <img src={SpinnerText} alt="Loading" />
      </div>
    )
  }
}

import React, { Component } from 'react'
import data from '../../assets/data/data.json'
import DisplayCarsList from '../DisplayCarsList'

export default class GetCarsList extends Component {
  constructor(props){
    super(props)
    this.state = {
      cars: data.offers
    }
  }
  render(){
    const cars = this.state.cars      
    return (
      <DisplayCarsList cars={cars} /> 
    )
  }
}
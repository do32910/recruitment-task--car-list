import React, { Component } from 'react'
import './DisplayCarsList.scss'

export default class DisplayCarsList extends Component{
  constructor(props){
      super(props)
      this.state = {
          cars: this.props.cars
      }
      this.removeFromList = this.removeFromList.bind(this)
  }

  removeFromList = (e, carIndex) => {
      e.preventDefault()
      var newCars = [...this.state.cars]
      newCars.splice(carIndex, 1)
      this.setState({
          cars: newCars
      })
  }

  changeStatus = (e, carIndex) => {
      e.preventDefault()
      this.setState(cars => {
        const newCars = [...this.state.cars]
        newCars[carIndex].availability = !newCars[carIndex].availability
        return {
          cars: newCars
        }
      })
  }

  render(){
    var tableRows = this.state.cars.map((car, index) => 
    <tr key={index} className={car.availability ? 'cars-table__body-row': 'cars-table__body-row unavailable'}>
      <td>
      {car.photo ? <img className='car-photo' src={car.photo} alt={`${car.make} ${car.model} ${car.engine}`} /> : null}
        <span className='car-model-name'>{`${car.make} ${car.model} ${car.engine}`}</span>
      </td>
      <td className='cars-table__body-item'>{car.model}</td>
      <td className='cars-table__body-item'>{car.engine}</td>
      <td className='cars-table__body-item'>{car.availability ? 'Tak' : 'Nie'}</td>
      <td className='cars-table__body-item'>
        <button className='manage-btn' onClick={(e) => this.removeFromList(e, index)}>Usuń</button>
        <button className='manage-btn' onClick={(e) => this.changeStatus(e, index)}>Zmień dostępność</button>
      </td>
      </tr>)
      return (
        <table className='cars-table'>
          <thead className='cars-table__header'>
          <tr>
            <td className='cars-table__header-item'>Nazwa</td>
            <td className='cars-table__header-item'>Model</td>
            <td className='cars-table__header-item'>Silnik</td>
            <td className='cars-table__header-item'>Dostępność</td>
            <td className='cars-table__header-item'>Akcje</td>
          </tr>
          </thead>
          <tbody>
            {tableRows.length > 0 ? tableRows : <tr class='empty-array'><td>Brak samochodów do wyświetlenia</td></tr>}
          </tbody>
        </table>
      )
  }
}
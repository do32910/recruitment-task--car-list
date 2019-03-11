import React, { Component } from 'react'
import GetCarsList from '../GetCarsList'
import './DisplayCarsList.scss'

export default class DisplayCarsList extends Component{
    constructor(props){
        super(props);
        this.state = {
            cars: this.props.cars
        }
    }
    render(){
        console.log(this.state.cars)
        var tableRows = this.state.cars.map((car, index) => <tr key={index} className="cars-table__body-row">
            <td>
                {car.photo ? <img className="car-photo" src={car.photo} /> : null}
                <span className="car-model-name">{car.make} {car.model} {car.engine}</span>
            </td>
            <td className="cars-table__body-item">{car.model}</td>
            <td className="cars-table__body-item">{car.engine}</td>
            <td className="cars-table__body-item">{car.availability ? "Tak" : "Nie"}</td>
            <td className="cars-table__body-item">
                <button className="manage-btn">Usuń</button>
                <button className="manage-btn">Zmień dostępność</button>
            </td>
        </tr>)
        return (
            <table className="cars-table">
                <thead className="cars-table__header">
                    <tr>
                        <td className="cars-table__header-item">Nazwa</td>
                        <td className="cars-table__header-item">Model</td>
                        <td className="cars-table__header-item">Silnik</td>
                        <td className="cars-table__header-item">Dostępność</td>
                        <td className="cars-table__header-item">Akcje</td>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        )
    }
}
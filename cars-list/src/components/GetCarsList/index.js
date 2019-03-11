import React, { Component } from 'react'
import './GetCarsList.scss'
import data from '../../assets/data/data.json';
import DisplayCarsList from '../DisplayCarsList';

export default class GetCarsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            cars: data.offers
        }
    }
    
    // componentWillMount() {
    //     fetch('../assets/data/data.json')
    //     // .then( response => )
    //     .then( response => {
    //         console.log(response)
    //     //     if(response.answer == 200){
    //     //         this.setState({
    //     //             cars: response.offers
    //     //         })
    //     //         console.log(response)
    //     //     }
    //     })
    //     .catch(function (error) {
    //         console.log("An error occured while fetching the requested data:\n", error);
    //     });
    // }
    
    render(){
        const cars = this.state.cars;
        // console.log(this.state.cars)
        
        return (
            <DisplayCarsList cars={cars} /> 
            )
        }
    }
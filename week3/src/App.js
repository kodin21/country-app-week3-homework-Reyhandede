import React, { Component } from 'react'

import CountryList from './components/countryList';
import Statistics from './components/statistics'
import Card from './components/cards';
import './App.css';



export default class App extends Component {
  render() {
    return (
      <div className="App">
         
        

       <CountryList/>
       
       <Statistics/>
      <p></p>

       <Card/>
       
      
     
       
        
      </div>
    );
  }
}

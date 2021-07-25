
import './Card.css'
  
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Card()
{

  const [countries, setCountries] = useState([]);  
  
// Send a GET request with Axios
useEffect(() => {
  axios.get('https://restcountries.eu/rest/v2/all')
  .then(response => setCountries(response.data));
}, []);


return(countries.map(country => {
  return (
     
  
    <div className='card-container'>

      <div className='image-container'> <img src={country.flag} alt=''/></div>

      <div className='card-content'>
      <div className='card-title'><p >{country.name}</p></div>
      <div className='card-body'><p>{ "Language: "+ country.languages[0].name }</p>
      <p>{"Capital: "+ country.capital}</p></div>
      </div>

    </div>
    




   




     
    
  )
})
)
}





export default Card
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './WeatherApp.css';

const WeatherApp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('Mumbai');

  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=37ff9426f77b82888e12fc497dfd1adf`)
        .then((res) => {
          console.log(res);
          setCity(res.data.main);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log('Over!!!');
        });
  }, [search]);

  return (
    <div className='container'>
      <div className='searchInput'>
        <input className='inputCity' type="search" value={search} placeholder='Search City' onChange={(e) => {
          setSearch(e.target.value);
        }} />
      </div>

      {!city ? (<h4 style={{marginLeft: 230}}>No Data Found</h4>) :
        (
          <div>
            <div className='currentLocation'>
              <div className='location'>
                <h1 className='city'>{search}</h1>
                <h2 className='temperature'>{(city.temp - 273).toFixed()}°C</h2>
              </div>

              {/* Min & Max Temp */}
              <span className='minMaxTemp'>
                <h5>Min Temp : {(city.temp_min - 273).toFixed()}°C  || Max Temp : {(city.temp_max - 273).toFixed()}°C</h5>
              </span>
            </div>
          </div>
        )}
    </div>
  );
};

export default WeatherApp;

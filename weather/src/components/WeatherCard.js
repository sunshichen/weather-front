import React,  { useState, useEffect } from 'react';
import {api} from './../utils/Api' 
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function WeatherCard(){
	const [name, setName] = useState();
	const [temp, setTemp] = useState();
	const [humidity, setHumitidy] = useState();


	function toggleButton(event){
		api.getWeather()
			.then((data)=>{
				console.log(data)
				setName(data.name)
				setTemp(data.main.temp)
				setHumitidy(data.main.humidity)
			})
	}


	return(
		<div>
			<Typography variant="h5" component="h2">
				Get Current London Weather
			</Typography>
			<Button variant="contained" color="primary" onClick={toggleButton}>
				Try it!
			</Button>
			<div>
				Name:   {name}
			</div>
			<div>
				Temperature:   {temp}
			</div>
			<div>
				Humidity:   {humidity}
			</div>
		</div>

	)
}

export default WeatherCard;
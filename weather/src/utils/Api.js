import axios from 'axios'

const API_WEATHER = 'http://api.openweathermap.org/data/2.5/weather?q=London&APPID=311dcce26ee35363d6995d617138599d'

class Api{
	constructor(){
		if(localStorage.getItem('token') === null){
			this.token = null;
		}
		else{
			this.token = localStorage.getItem('token');
		}
	}

	getWeather(){
		let URL = API_WEATHER;

		return axios.get(URL).then((response) => response.data)
	}
}

export const api = new Api();
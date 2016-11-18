import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/weather_chart.js';
import CityMap from '../components/google_map.js';


class WeatherList extends Component {
	constructor(props) {
		super(props);
		this.extractData = this.extractData.bind(this);
	}

	extractData(data, key) {
		switch(key){
			case 'temp':
				return data.list.map(dataPoint => {
					return dataPoint.main.temp;
				});
			case 'pressure':
				return data.list.map(dataPoint => {
					return dataPoint.main.pressure;
				});
			case 'humidity':
				return data.list.map(dataPoint => {
					return dataPoint.main.humidity;
				})
			default:
				return null;
		}
		
	}

	renderWeather(cityData) {
		const temperature = this.extractData(cityData, 'temp');
		const pressure = this.extractData(cityData, 'pressure');
		const humidity = this.extractData(cityData, 'humidity');
		const lat = cityData.city.coord.lat;
		const lon = cityData.city.coord.lon;

		return (
			<tr key={cityData.city.name}>
				<td>
					<CityMap lat={lat} lon={lon} />
				</td>
				<td><Chart height={120} width={180} data={temperature} color={'blue'} /></td>
				<td><Chart height={120} width={180} data={pressure} color={'red'} /></td>
				<td><Chart height={120} width={180} data={humidity} color={'green'} /></td>
			</tr>
		)
	}

	render() {
		return (
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(cityData => this.renderWeather(cityData))}
				</tbody>
			</table>
		)
	}
}



const mapStateToProps = ({weather}) => {
	return {
		weather
	}
}

export default connect(mapStateToProps)(WeatherList);
import React from 'react';

import Search from '../containers/search.js';
import WeatherList from '../containers/weather_list.js';

const App = () => {
	return(
		<div>
			<Search />
			<WeatherList />
		</div>
	)
}

export default App;
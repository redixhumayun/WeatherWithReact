import React from 'react';
import {Component} from 'react';
import {fetchWeather} from '../actions/index.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Search extends Component {
	constructor(props){
		super(props);
		this.state = {term: ''};

		this.handleChange = this.handleChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({term: e.target.value});
	}

	onFormSubmit(e) {
		e.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term: ''});
	}

	render() {
		return (
			<div className='col-sm-8 offset-sm-2 search-bar'>
				<form onSubmit={this.onFormSubmit} className='input-group'>
					<input className='form-control' 
					placeholder='City' 
					onChange={this.handleChange}
					value={this.state.value}/>
					<span className='input-group-btn'>
						<button type='submit' className='btn btn-primary'>Submit</button>
					</span>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	// return {
	// 	onCitySelect: (city) => {
	// 		dispatch(fetchWeather(city));
	// 	}
	// }
	return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(Search); 
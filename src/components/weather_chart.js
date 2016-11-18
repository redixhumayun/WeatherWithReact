import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

const average = (data) => {
	return Math.round(data.reduce((prev, current) => {
		return prev+current;
	}) / data.length);
}

const Chart = (props) => {
	return (
		<div>
			<Sparklines svgHeight={props.height} svgWidth={props.width} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="mean" />
			</Sparklines>
			<div>{average(props.data)}</div>
		</div>
	)
}

export default Chart;
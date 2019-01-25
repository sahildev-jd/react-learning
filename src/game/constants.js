import React from 'react';
import MaterialIcon from 'material-icons-react';
import './Game.css';
import _ from 'lodash'

export const Stars = () => {
	const noOfStars = 1 + Math.floor(Math.random() * 9);
	let stars = [];

	for(let i = 0; i < noOfStars; i++) {
		stars.push(<MaterialIcon key={i} icon="star"/>);
	}
	return (
		<div className="col-5">stars</div>)
};

export const Button = () => {

	return (<div className="col-2">
		<button>=</button>
	</div>);
};

export const Answer = () =>
	<div className="col-5">
		...
	</div>;

export const Numbers = () => {
	let numbers = _.range(1, 9);

	numbers = numbers.map((x, i) => {
		return i;
	});

	return (<div className="card text-center">
		<div>
			<span className="used">1</span>
			<span className="selected">2</span>
			<span>3</span>
			<span>4</span>
		</div>
	</div>);
}

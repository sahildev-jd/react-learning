import React from 'react';
import MaterialIcon from 'material-icons-react';
import './Game.css';
import _ from 'lodash';

export const Stars = (props) => {
	return (
		<div style={{
			display: 'flex',
			flexWrap: 'wrap',
			width: '30%'
		}}>{_.map(_.range(props.noOfStars), (x, i) =>
			(<MaterialIcon key={i} icon="star" size={40}/>)
		)}
		</div>
	)
};

export const Button = (props) => {
	return (
		<div>
			<button>=</button>
		</div>
	);
};

export const Answer = (props) => {
	return (
		<div style={{
			flexWrap: 'wrap',
			width: '30%'
		}}>
			{_.map(props.selectedNumbers, (number, i) =>
				(<span key={i}>{number}</span>)
			)}
		</div>
	);
};

export const Numbers = (props) => {
	const getClassForNumber = (number) => {
		return props.selectedNumbers.includes(number) ? 'selected' : '';
	};

	return (
		<div style={{
			display: 'flex',
			border: '1px solid',
			justifyContent: 'center'
		}}>
			{_.map(Numbers.list, (number, i) =>
				<span key={i}
					  className={getClassForNumber(number)}
					  onClick={() => props.addSelectedNumber(number)}>{number}</span>
			)}
		</div>
	);
};

Numbers.list = _.range(1, 10);

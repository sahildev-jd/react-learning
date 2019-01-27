import React from 'react';
import MaterialIcon from 'material-icons-react';
import './Game.css';
import _ from 'lodash';
import {Button} from 'react-md';

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

export const EqualsButton = (props) => {
	let button;
	switch(props.answerIsCorrect) {
		case true:
			button = <Button raised primary>
			</Button>;
			break;
		case false:
			button = <Button raised secondary>
			</Button>;
			break;
		default:
			button = <Button disabled={props.selectedNumbers.length === 0}
							 raised
							 primary
							 onClick={props.checkAnswer}>=</Button>;
	}
	return (
		<div>
			{button}
		</div>
	);
};

export const Answer = (props) => {
	return (
		<div style={{
			flexWrap: 'wrap',
			width: '40%'
		}}>
			{_.map(props.selectedNumbers, (number, i) =>
				(<span key={i}
					   className='number'
					   onClick={() => {
						   props.removeSelectedNumber(number)
					   }}>{number}</span>)
			)}
		</div>
	);
};

export const Numbers = (props) => {
	const getClassForNumber = (number) => {
		return props.selectedNumbers.includes(number) ? 'selected number' : 'number';
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

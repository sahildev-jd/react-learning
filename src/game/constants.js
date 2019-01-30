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

export const EqualsButton = (props) => {
	let button;
	switch(props.answerIsCorrect) {
		case true:
			button = <button style={{backgroundColor: 'green'}}
							 onClick={props.acceptAnswer}><i className="material-icons">check</i></button>;
			break;
		case false:
			button = <button style={{backgroundColor: 'red'}}><i className="material-icons">error</i></button>;
			break;
		default:
			button = <button disabled={props.selectedNumbers.length === 0}
							 onClick={props.checkAnswer}><i className="material-icons">drag_handle</i></button>;
	}
	return (
		<div>
			{button}
			<br/>
			<br/>
			<button className="btn btn-warning btn-sm"
					onClick={props.redrawStars}
					disabled={props.redraws === 0}>
				<i className="material-icons">refresh</i>{props.redraws}
			</button>
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
		return props.selectedNumbers.includes(number) ? 'selected number' : props.usedNumbers.includes(number) ? 'used number' : 'number';
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

export const DoneStatus = (props) => {
	return (
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			fontSize: '24px'
		}}>
			<h5>{props.doneStatus}</h5>
			<br/>
			<button className="btn btn-secondary"
					onClick={props.resetGame}>Plan again
			</button>
		</div>
	);
};

Numbers.list = _.range(1, 10);

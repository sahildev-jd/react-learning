import React from 'react';
import {Answer, EqualsButton, Stars, Numbers, DoneStatus} from './constants';
import _ from 'lodash';

class Game extends React.Component {
	static randomNumber = () => 1 + Math.floor(Math.random() * 9);

	constructor() {
		super();
		this.state = {
			selectedNumbers: [],
			noOfStars: Game.randomNumber(),
			answerIsCorrect: null,
			usedNumbers: [],
			redraws: 5,
			doneStatus: null
		}
	}

	addSelectedNumber = (selectedNumber) => {
		if(this.state.selectedNumbers.includes(selectedNumber) || this.state.usedNumbers.includes(selectedNumber)) {
			return;
		}
		this.setState(prevState => ({
			answerIsCorrect: null,
			selectedNumbers: prevState.selectedNumbers.concat(selectedNumber)
		}));
	};

	removeSelectedNumber = (selectedNumber) => {
		this.setState(prevState => ({
			answerIsCorrect: null,
			selectedNumbers: _.filter(prevState.selectedNumbers, (number) => number !== selectedNumber)
		}));
	};

	checkAnswer = () => {
		this.setState(prevState => ({
			answerIsCorrect: _.reduce(prevState.selectedNumbers, (a, b) => a + b, 0) === prevState.noOfStars
		}));
	};

	acceptAnswer = () => {
		this.setState(prevState => ({
			usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
			selectedNumbers: [],
			noOfStars: Game.randomNumber(),
			answerIsCorrect: null,
		}));
	};

	redrawStars = () => {
		if(this.state.redraws === 0) {
			return;
		}
		this.setState(prevState => ({
			selectedNumbers: [],
			noOfStars: Game.randomNumber(),
			answerIsCorrect: null,
			redraws: prevState.redraws - 1
		}));
	};

	updateDoneStatus = () => {
		this.setState(prevState => {
			if(prevState.usedNumbers.length === 9) {
				return {doneStatus: 'Done! Nice Work!'};
			} else if(prevState.redraws === 0 && this.possibleSolutions(prevState)) {
				return {doneStatus: 'Better Luck next time!'};
			}
		});
	};

	possibleSolutions = ({noOfStars, usedNumbers}) => {
		const possibleNumbers = _.filter(_.range(1, 10), (x) => usedNumbers.indexOf(x) === -1);
		possibleCombinationSum(possibleNumbers, noOfStars);
	};

	render() {
		const {selectedNumbers, noOfStars, answerIsCorrect, usedNumbers, redraws, doneStatus} = this.state;
		return (
			<div style={{
				display: 'flex',
				flexDirection: 'column',
				width: '30%'
			}}>
				<h1>Play 9</h1>
				<div style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}>
					<Stars noOfStars={noOfStars}/>

					<EqualsButton selectedNumbers={selectedNumbers}
								  checkAnswer={this.checkAnswer}
								  answerIsCorrect={answerIsCorrect}
								  acceptAnswer={this.acceptAnswer}
								  redrawStars={this.redrawStars}
								  redraws={redraws}/>

					<Answer selectedNumbers={selectedNumbers}
							removeSelectedNumber={this.removeSelectedNumber}/>
				</div>
				<br/>

				{doneStatus ? <DoneStatus doneStatus={doneStatus}/> : <Numbers selectedNumbers={selectedNumbers}
																			   addSelectedNumber={this.addSelectedNumber}
																			   usedNumbers={usedNumbers}/>}

			</div>
		)
	};
}

var possibleCombinationSum = function(arr, n) {
	if(arr.indexOf(n) >= 0) {
		return true;
	}
	if(arr[0] > n) {
		return false;
	}
	if(arr[arr.length - 1] > n) {
		arr.pop();
		return possibleCombinationSum(arr, n);
	}
	var listSize = arr.length, combinationsCount = (1 << listSize);
	for(var i = 1; i < combinationsCount; i++) {
		var combinationSum = 0;
		for(var j = 0; j < listSize; j++) {
			if(i & (1 << j)) {
				combinationSum += arr[j];
			}
		}
		if(n === combinationSum) {
			return true;
		}
	}
	return false;
};

export default Game;

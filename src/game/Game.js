import React from 'react';
import {Answer, EqualsButton, Stars, Numbers} from './constants';
import _ from 'lodash';

class Game extends React.Component {

	constructor() {
		super();
		this.state = {
			selectedNumbers: [],
			noOfStars: 1 + Math.floor(Math.random() * 9),
			answerIsCorrect: null
		}
	}

	addSelectedNumber = (selectedNumber) => {
		if(this.state.selectedNumbers.includes(selectedNumber)) {
			return;
		}
		this.setState(prevState => ({
			selectedNumbers: prevState.selectedNumbers.concat(selectedNumber)
		}));
	};

	removeSelectedNumber = (selectedNumber) => {
		this.setState(prevState => ({
			selectedNumbers: _.filter(prevState.selectedNumbers, (number) => number !== selectedNumber)
		}));
	};

	checkAnswer = () => {
		this.setState(prevState => ({
			answerIsCorrect: _.reduce(prevState.selectedNumbers, (a, b) => a + b, 0)
		}));
	};

	render() {
		const {selectedNumbers, noOfStars, answerIsCorrect} = this.state;
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
								  answerIsCorrect={answerIsCorrect}/>
					<Answer selectedNumbers={selectedNumbers}
							removeSelectedNumber={this.removeSelectedNumber}/>
				</div>
				<br/>
				<Numbers selectedNumbers={selectedNumbers}
						 addSelectedNumber={this.addSelectedNumber}/>
			</div>
		)
	};
}

export default Game;

import React from 'react';
import {Answer, Button, Stars, Numbers} from './constants';

class Game extends React.Component {

	constructor() {
		super();
		this.state = {
			selectedNumbers: [],
			noOfStars: 1 + Math.floor(Math.random() * 9)
		}
	}

	addSelectedNumber = (numbers) => {
		if(this.state.selectedNumbers.includes(numbers)) {
			return;
		}
		this.setState(prevState => ({
			selectedNumbers: prevState.selectedNumbers.concat(numbers)
		}));
	};

	render() {
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
					<Stars noOfStars={this.state.noOfStars}/>
					<Button/>
					<Answer selectedNumbers={this.state.selectedNumbers}/>
				</div>
				<br/>
				<Numbers selectedNumbers={this.state.selectedNumbers} addSelectedNumber={this.addSelectedNumber}/>
			</div>
		)
	};
}

export default Game;

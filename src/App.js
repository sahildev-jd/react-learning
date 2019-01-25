import React from 'react';
import './App.css';
// import Form from './github-cards/Form';
// import ListOfCards from './github-cards/ListOfCards'
import Game from './game/Game'

class App extends React.Component {
	// state = {count: 0};
	//
	// incrementCount = (incrementValue) => {
	// 	// this.setState({count: this.state.count + 1}); 			// bad since it causes performance issues when called multiple times
	// 	this.setState((prevState) => ({
	// 		count: prevState.count + incrementValue
	// 	}))
	// };
	state = {cards: []};

	addNewCard = (cardInfo) => {
		this.setState((prevState) => ({
			cards: prevState.cards.concat(cardInfo)
		}));
	};

	render() {
		return (
			<div style={{margin: '12px'}}>
				{/*<Button onClickFunction={this.incrementCount} incrementValue={1}/>
				<Button onClickFunction={this.incrementCount} incrementValue={2}/>
				<Button onClickFunction={this.incrementCount} incrementValue={5}/>
				<Button onC lickFunction={this.incrementCount} incrementValue={10}/>
				<Result label={this.state.count}/>*/}
				{/*<Form onSubmit={this.addNewCard}/>*/}
				{/*<ListOfCards cards={this.state.cards}/>*/}
				<Game/>
			</div>
		)
	}
}

// class Button extends React.Component {
//
// 	handleClick = () => {
// 		this.props.onClickFunction(this.props.incrementValue)
// 	};
//
// 	render() {
// 		return (
// 			<button onClick={this.handleClick}> + {this.props.incrementValue} </button>
// 		)
// 	}
// }
//
// const Result = (props) => {
// 	return (
// 		<div>{props.label}</div>
// 	)
// };

export default App;

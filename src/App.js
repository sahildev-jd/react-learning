import React from 'react';
import './App.css';
import axios from 'axios';

const githubUsersApi = 'https://api.github.com/users/';

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
				<Form onSubmit={this.addNewCard}/>
				<CardList cards={this.state.cards}/>
				{/*<Button onClickFunction={this.incrementCount} incrementValue={1}/>
				<Button onClickFunction={this.incrementCount} incrementValue={2}/>
				<Button onClickFunction={this.incrementCount} incrementValue={5}/>
				<Button onC lickFunction={this.incrementCount} incrementValue={10}/>
				<Result label={this.state.count}/>*/}
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

const Card = (props) => {
	return (
		<div style={{margin: '1em'}}>
			<img src={props.avatar_url} width="75" alt=""/>
			<div style={{
				display: 'inline-block',
				marginLeft: '10'
			}}>
				<div style={{
					fontWeight: 'bold',
					fontSize: '1.25em'
				}}>{props.name}</div>
				<div>{props.company}</div>
			</div>
		</div>
	)
};

const CardList = (props) => {
	return (
		<div>
			{props.cards.map((card) => <Card key={card.id} {...card}/>)}
		</div>
	)
};

class Form extends React.Component {
	state = {userName: ''};

	handleClick = (event) => {
		event.preventDefault();

		axios.get(githubUsersApi + this.state.userName).then((response) => {
			this.props.onSubmit(response.data);

			this.setState({userName: ''});
		});
	};

	render() {
		return (<form onSubmit={this.handleClick}>
			<input type='text'
				   placeholder='Enter Github username'
				   ref={(input) => {
					   this.inputName = input;
				   }}
				   value={this.state.userName}
				   onChange={(event) => {
					   this.setState({userName: event.target.value})
				   }}
				   required/>
			<button type='submit'>Add Card</button>
		</form>)

	}
}

export default App;

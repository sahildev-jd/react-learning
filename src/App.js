import React, {Component} from 'react';
import './App.css';

class App extends Component {
	state = {count: 0};

	incrementCount = (incrementValue) => {
		// this.setState({count: this.state.count + 1}); 			// bad since it causes performance issues when called multiple times
		this.setState((prevState) => ({
			count: prevState.count + incrementValue
		}))
	};

	render() {
		return (
			<div>
				<CardList/>
				{/*<Button onClickFunction={this.incrementCount} incrementValue={1}/>
				<Button onClickFunction={this.incrementCount} incrementValue={2}/>
				<Button onClickFunction={this.incrementCount} incrementValue={5}/>
				<Button onClickFunction={this.incrementCount} incrementValue={10}/>
				<Result label={this.state.count}/>*/}
			</div>
		)
	}
}

class Button extends React.Component {

	handleClick = () => {
		this.props.onClickFunction(this.props.incrementValue)
	};

	render() {
		return (
			<button onClick={this.handleClick}> + {this.props.incrementValue} </button>
		)
	}
}

const Result = (props) => {
	return (
		<div>{props.label}</div>
	)
};

const Card = (props) => {
	return (
		<div style={{margin: '1em'}}>
			<img src="http://www.placehold.it/75"/>
			<div className="info">
				<div className="text">{props.name}</div>
				<div className="text">{props.company}</div>
			</div>
		</div>
	)
};

const CardList = (props) => {
	return (
		<div>
			<Card name="Sahil" company='Target'/>
		</div>
	)
};

export default App;

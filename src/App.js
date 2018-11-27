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
				<Button onClickFunction={this.incrementCount} incrementValue={1}/>
				<Button onClickFunction={this.incrementCount} incrementValue={2}/>
				<Button onClickFunction={this.incrementCount} incrementValue={5}/>
				<Button onClickFunction={this.incrementCount} incrementValue={10}/>
				<Result label={this.state.count}/>
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

export default App;

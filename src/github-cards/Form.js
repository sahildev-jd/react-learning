import React from 'react';
import axios from 'axios';

const githubUsersApi = 'https://api.github.com/users/';

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
		return (
			<form onSubmit={this.handleClick}>
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
			</form>
		)

	}
}

export default Form;

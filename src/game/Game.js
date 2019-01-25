import React from 'react';
import {Answer, Button, Numbers, Stars} from './constants';

class Game extends React.Component {
	render() {
		return (
			<div className="container">
				<h3>Play 9</h3>
				<div className="row">
					<Stars/>
					<Button/>
					<Answer/>
				</div>
				<br/>
				<Numbers/>
			</div>
		)
	};
}

export default Game;

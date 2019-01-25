import React from 'react';
import './App.css';
import Users from './user-data/Users';

class App extends React.Component {
	render() {
		return (
			<div style={{margin: '12px'}}>
				<Users/>
			</div>
		)
	}
}

export default App;

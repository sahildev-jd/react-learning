import React from 'react';

const Personal = (props) => {
	return (<div>
		<div style={{
			display: 'inline-block',
			fontWeight: 'bold',
			marginBottom: '8px'
		}}>Personal Details:
		</div>
		<div style={{display: 'inline-block'}}>
			{props.personal[0].fullname}, {props.personal[0].gender}, {props.personal[0].age}
		</div>
	</div>);
};

export default Personal;

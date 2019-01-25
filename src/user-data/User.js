import React from 'react';
import Personal from './Personal';
import Professional from './Professional';

const User = (props) => {
	return (<div>
		<Personal personal={props.details.personal}/>
		<Professional prof={props.details.professional}/>
	</div>);
};

export default User;

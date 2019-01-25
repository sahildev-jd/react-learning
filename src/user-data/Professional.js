import React from 'react';

const Professional = (props) => {
	return (
		<div style={{marginBottom: '20px'}}>
			<div style={{
				display: 'inline-block',
				fontWeight: 'bold',
			}}>Professional Details:
			</div>
			<div>
				{props.prof.flatMap((company) => {
					return company.company;
				}).map((company) => <Company key={company.name} {...company}/>)}</div>
		</div>);

};

export default Professional;

const Company = (props) => {
	return (
		<div>
			{props.name}, {props.experience} years, {props.role}
		</div>
	)
};

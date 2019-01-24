import React from 'react';

const ListOfCards = (props) => <div>
	{props.cards.map((card) => <Card key={card.id} {...card}/>)}
</div>;

const Card = (props) => <div style={{margin: '1em'}}>
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
</div>;

export default ListOfCards;

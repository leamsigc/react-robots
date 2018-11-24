import React from 'react';
import { robots } from './robots';
import './card.css';
import Title from './Components/Title';
import Robot from './Components/Robot';

const Card = () => {
	return (
		<React.Fragment>
			<Title />
			{robots.map(r => {
				return <Robot name={r.name} userName={r.userName} email={r.email} id={r.id} />;
			})}
		</React.Fragment>
	);
};

export default Card;

import React from 'react';
import { robots } from './robots';
import './card.css';
import Title from './Components/Title';
import Robot from './Components/Robot';
import Search from './Components/Search';
import Scroll from './Components/Scroll';

class Card extends React.Component {
	constructor() {
		super();
		this.state = {
			robot: robots,
			search: ''
		};
	}

	onSearchChange = e => {
		this.setState({
			search: e.target.value
		});
	};
	render() {
		const filteredRobot = this.state.robot.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.search.toLowerCase());
		});
		return (
			<React.Fragment>
				<Title />
				<Search searchChange={this.onSearchChange} />
				<Scroll>
					{filteredRobot.map(r => {
						return <Robot name={r.name} userName={r.userName} email={r.email} id={r.id} />;
					})}
				</Scroll>
			</React.Fragment>
		);
	}
}

export default Card;

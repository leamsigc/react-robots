import React, { Component } from 'react';

export default class Robot extends Component {
	render() {
		const { id, name, userName, email } = this.props;
		return (
			<div className="card" id={id}>
				<img className="card__img" src={`https://robohash.org/${name}?200x200`} alt="simple Robot" />
				<div className="card_info">
					<h2>{name}</h2>
					<p>{userName}</p>
					<p>{email}</p>
				</div>
			</div>
		);
	}
}

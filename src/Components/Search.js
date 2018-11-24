import React, { Component } from 'react';
import '../Search-box.css';

export default class Search extends Component {
	render() {
		return (
			<div className="search-box">
				<input onChange={this.props.searchChange} className="search-input" type="text" placeholder="search ..." />
			</div>
		);
	}
}

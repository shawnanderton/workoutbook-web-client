import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Nav.css";

function Nav() {
	const activeStyle = { color: 'blue' };

	return (
		<nav>
			<NavLink activeStyle={activeStyle} to="/" exact>
				<i className="link-button fas fa-home"></i>
			</NavLink>
			<NavLink activeStyle={activeStyle} to="/workout-page">
				<i className="link-button fas fa-dumbbell"></i>
			</NavLink>
			<NavLink activeStyle={activeStyle} to="/timer">
				<i className="link-button far fa-clock"></i>
			</NavLink>
		</nav>
	);
}

export default Nav;

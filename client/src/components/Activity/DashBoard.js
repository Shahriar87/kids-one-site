import PropTypes from 'prop-types';
import React from 'react';

export const DashBoard = ({ type, query, queryObject }) => {

	let _type, _query;

	const submit = (e) => {
		e.preventDefault();
	};

	return (
		<nav aria-label="Search Books" id="book-form">
			<header>
				<h1>DIY and Interesting Activites</h1>
			</header>
		</nav>
	)
}

DashBoard.propTypes = {
	type: PropTypes.string,
	query: PropTypes.string
};
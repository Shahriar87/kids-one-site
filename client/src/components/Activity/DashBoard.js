import PropTypes from 'prop-types';
import React from 'react';

export const DashBoard = ({ type, query, queryObject }) => {

	let _type, _query;

	const submit = (e) => {
		e.preventDefault();
		queryObject({

		});
	};

	return (
		<nav aria-label="Search Books" id="book-form">
			<header>
				<h5>DIY and Interesting Activites</h5>
			</header>
			<form onSubmit={submit}>
				<input type="submit"
					value="Search" />
			</form>
		</nav>
	)
}


import React from 'react';

export const DashBoard = ({ queryObject }) => {

	// let _type, _query;

	const submit = (e) => {
		e.preventDefault();
		queryObject({

		});
	};

	return (
		<nav aria-label="Search Books" id="book-form">
			<form onSubmit={submit}>
				<input type="submit"
					value="Search" />
			</form>
		</nav>
	)
}


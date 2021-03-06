import React from 'react';
import PropTypes from 'prop-types';
import { BookRow } from './BookRow';
export const Favorites = ({data, highlight, visibility}) => {

	if (visibility) {
		return(
			<section id="favorites"
							 aria-label="List of books added to favorites">
				{data.map((entry, i) =>
					<BookRow key = {i}
					         rowNumber = {i}
							 title = {entry.title}
							 imageLink={entry.imageLink}
							 highlight = {highlight}
					/>
				)}
			</section>
		)
	} else {
		return null;
	}
}

Favorites.propTypes = {
	data: PropTypes.array
}
import PropTypes from 'prop-types';
import { BookRow } from './BookRow';
import React from 'react';

export const BookList = ({ data, highlight, visibility }) => {

	if (visibility && data[0] !== null) {
		return (
			<section id="book-list"
				aria-label="List of games">
				{data.map((entry, i) =>
					<div id="game_list_BG" className="d-inline-flex p-2">
						<BookRow		
							key={i}
							rowNumber={i}
							title={entry.title}
							imageLink={entry.imageLink}
							highlight={highlight}
						/>
					</div>
				)}
			</section>
		)
	} else {
		return null;
	}
}

BookList.propTypes = {
	data: PropTypes.array
}
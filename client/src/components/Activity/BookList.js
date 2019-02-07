import PropTypes from 'prop-types';
import { BookRow } from './BookRow';
import React from 'react';

const styles = {
	img: {
		width: "20.1%",
		height: "10.2%"
	},
};

export const BookList = ({ data, highlight, visibility }) => {

	if (visibility && data[0] !== null) {
		return (
			<section id="book-list"
				aria-label="List of searched books">
				{data.map((entry, i) =>

					<a target="_blank" href={"//play.fisher-price.com" + entry.link}>
						<img src={"//play.fisher-price.com" + entry.imageLink} alt={entry.title}  style={styles.img} />

						<BookRow		
							key={i}
							rowNumber={i}
							title={entry.title}
							highlight={highlight}
						/>
					</a>
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
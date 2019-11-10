import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import React from 'react';

const styles = {
	img: {
		width: "100px",
		height: "90px"
	},
	card: {
		width: "200px",
		height: "200px"
	}
};

export const BookRow = ({ rowNumber, title, imageLink, highlight }) => {

	// Scroll to the top of UI when user selects an entry
	const click = () => {
		// console.log(highlight, rowNumber);
		highlight({
			highlight: rowNumber
		})
		Scroll.animateScroll.scrollTo(200);
	}

	return (
		<div className="card m-3" style={styles.card}>
			<div onClick={click} className="list-group-item">
				<div className="card-body">
					<img src={"https://www.dltk-kids.com/" + imageLink} alt={title} style={styles.img} />
				</div>
				<div className="card-title">
					<span>{title}</span>
				</div>
			</div>
		</div>
	)
}

BookRow.propTypes = {
	title: PropTypes.string,
	imageLink: PropTypes.string,
}
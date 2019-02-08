import React from 'react';
import { PropTypes } from 'prop-types';
export const Highlight = ({ data, visibility, addFavorite, removeFavorite }) => {

	const color = { background: 'white', border: 'white', color: 'red' };

	const styles = {
		img: {
			width: "200%",
			height: "auto"
		},
	};

	const addToFavorites = () => {
		addFavorite(data);
	};

	const removeFromFavorites = () => {
		removeFavorite(data);
	};

	if (visibility.highlight) {
		return (
			<div>
				<section className="card bg-info"
					aria-label="Book Detail">
					<div className="bg-secondary">
						<h2>{data.title}</h2>
					</div>
					<br />
					<div className="row">
						<div className="col-3">
							<img src={data.imageLink} alt={data.title} style={styles.img} />
						</div>
						<div className="col-3">
						</div>
						<div className="col-6">
							<a target="_blank" href={"https://famobi.com" + data.link}><button> Read More!</button></a>
						</div>
					</div>
					<br />
					<div className="bg-warning">
						{!visibility.favorites ?
							<button onClick={() => addToFavorites()}> Favorite</button> :
							<button style={color} onClick={() => removeFromFavorites()}> Remove</button>}
					</div>
				</section>
				<br />
			</div>
		)
	} else {
		return null;
	}
};


Highlight.propTypes = {
	data: PropTypes.object
}
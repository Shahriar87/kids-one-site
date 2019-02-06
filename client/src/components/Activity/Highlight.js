import React from 'react';
import { PropTypes } from 'prop-types';
export const Highlight = ({ data, visibility, addFavorite, removeFavorite }) => {

	const color = { background: 'white', border: 'white', color: 'red' };

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
						<h3>{(data.authors) ? <span>by </span> : null}{data.authors}</h3>
					</div>
					<br />
					<div className="row">
						<div className="col-3">
							<img src={data.thumbnail} alt={data.title} />
						</div>
						<div className="col-6">
							<p>{data.description}</p>
						</div>
					</div>
					<div>
						<span>{data.publisher}</span>
						<span>{data.publishedDate}</span>
					</div>
					<br />
					<div className="bg-warning">
						{!visibility.favorites ?
							<button onClick={() => addToFavorites()}> Favorite</button> :
							<button style={color} onClick={() => removeFromFavorites()}> Remove</button>}
						{(data.price) ? <a href={data.purchase}> Buy ${data.price}</a> : null}
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
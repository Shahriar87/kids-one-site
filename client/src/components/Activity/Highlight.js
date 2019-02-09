import React from 'react';
import { PropTypes } from 'prop-types';
import axios from 'axios';

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

	// console.log(data);

	const activityLink = {
		// activityLink: "http://play.fisher-price.com" + data.link

		activityLink: "http://play.fisher-price.com" + "/en_US/GamesandActivities/Crafts/IceCreamConeClowns.html"


	}

	var htmlBody;

	// ----- Fetch data from activity API
	const fetchActivity = () => {
		axios({
			method: 'post',
			url: 'api/singleactivity',
			data: activityLink
		})
			.then((res) => {
				// console.log(res.data)

				htmlBody = res.data;

				console.log(htmlBody);

			}).catch((err) => {
				console.error('There was an error fetching data', err);
			});
	}


	if (visibility.highlight) {
		fetchActivity()

		console.log(htmlBody);

		return (
			<div>
				<section className="card bg-info"
					aria-label="Book Detail">
					<div className="bg-secondary">
						<h2>{data.title}</h2>
					</div>
					<br />
					<div className="row">
						{/* <div className="card-body col-md-12 embed-responsive embed-responsive-16by9">
							<iframe title="Game" className="embed-responsive-item" src={"//play.fisher-price.com" + data.link}></iframe>
						</div> */}

						{htmlBody}

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
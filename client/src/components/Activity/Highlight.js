import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';
import axios from 'axios';


export default class Highlight extends Component {

	state = {
		data: this.props.data,
		visibility: this.props.visibility,
		addFavorite: this.props.addFavorite,
		removeFavorite: this.props.removeFavorite,


		// activityLink: "http://play.fisher-price.com" + data.link

		activityLink: "http://play.fisher-price.com" + "/en_US/GamesandActivities/Crafts/IceCreamConeClowns.html",

		htmlBody: ''
	}



	addToFavorites = () => {
		this.props.addFavorite(this.state.data);
	};

	removeFromFavorites = () => {
		this.props.removeFavorite(this.state.data);
	};

	// console.log(data);

	fetchActivity = () => {
		console.log(this.state.activityLink);

		axios({
			method: 'post',
			url: 'api/singleactivity',
			data: {activityLink: this.state.activityLink}
		})
			.then((res) => {
				// console.log(res.data)

				// this.statehtmlBody = res.data;
				console.log(res.data)

				this.setState({
					htmlBody: res.data
				})

				console.log(res.data);

			}).catch((err) => {
				console.log('There was an error fetching data', err);
			});
	}

	componentDidMount() {
		console.log(this.state.activityLink);
		this.fetchActivity()

	}

	render() {
		if (this.props.visibility.highlight) {

			console.log(this.state.htmlBody);

			return (
				<div>
					<section className="card bg-info"
						aria-label="Book Detail">
						<div className="bg-secondary">
							<h2>{this.props.data.title}</h2>
						</div>
						<br />
						<div className="row">
							{/* <div className="card-body col-md-12 embed-responsive embed-responsive-16by9">
								<iframe title="Game" className="embed-responsive-item" src={"//play.fisher-price.com" + data.link}></iframe>
							</div> */}

							{this.state.htmlBody}

						</div>
						<br />
						<div className="bg-warning">
							{!this.props.visibility.favorites ?
								<button onClick={() => this.addToFavorites()}> Favorite</button> :
								<button onClick={() => this.removeFromFavorites()}> Remove</button>}
						</div>
					</section>
					<br />
				</div>
			)
		} else {
			return null;
		}

	}



}




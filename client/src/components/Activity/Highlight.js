import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';
import axios from 'axios';

import './Highlight.css';


const styles = {
	img: {
		width: "200%",
		height: "auto"
	},
};

export default class Highlight extends Component {

	state = {
		activityLink: "http://play.fisher-price.com" + "/en_US/GamesandActivities/Crafts/IceCreamConeClowns.html",
		htmlString: ''
	}

	addToFavorites = () => {
		this.props.addFavorite(this.props.data);
	};

	removeFromFavorites = () => {
		this.props.removeFavorite(this.props.data);
	}; 1


	// ---- Scraping Activity Detail
	fetchActivity = () => {
		axios({
			method: 'post',
			url: 'api/singleactivity',
			data: { activityLink: this.state.activityLink }
		})
			.then((res) => {
				// console.log(res.data)
				this.setState({
					htmlString: res.data
				})

			})
			.catch((err) => {
				console.log('There was an error fetching data', err);
			})
	}

	// // ---- This resulted slower to render
	// componentWillReceiveProps() {
	// 	document.getElementById("content").innerHTML = '<p>Data Loading! Please Wait</p>';
	// 	this.setState({
	// 		activityLink: "http://play.fisher-price.com" + this.props.data.link
	// 	}, this.fetchActivity)
	// }

	// ---- I get a faster result with these 2 on rendering 
	componentDidMount() {
		this.setState({
			activityLink: "http://play.fisher-price.com" + this.props.data.link
		}, this.fetchActivity)
	}

	componentDidUpdate() {
		if (this.state.activityLink !== null) {
			if (this.state.activityLink !== "http://play.fisher-price.com" + this.props.data.link) {
				this.setState({
					activityLink: "http://play.fisher-price.com" + this.props.data.link
				}, this.fetchActivity)
			}
		}
	}

	render() {

		if (this.props.visibility.highlight) {
			return (
				<div>
					<section id="wrapperHighlight"
						aria-label="Book Detail">
						<div className="bg-secondary">
							<h2>{this.props.data.title}</h2>
						</div>
						<br />
						<div className="col-4">
							<img src={"//play.fisher-price.com" + this.props.data.imageLink} alt={this.props.data.title} style={styles.img} />
						</div>
						<br />
						<div id="content" className="row" dangerouslySetInnerHTML={{ __html: this.state.htmlString }}>
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





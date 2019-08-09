import React, { Component } from 'react';
import Card from './card';

class Cards extends Component {
	state = { 
		cards: []
	 }
	
	componentDidMount() {
		const axios = require('axios');

		axios.get('https://canadavacations.com/wp-json/wp/v2/find-trips/')
		.then( response => {
			console.log( typeof(response.data));
			const tripData = response.data; 
				this.setState({
					cards: tripData
				})
		})
		.catch(function (error) {
			console.log(error);
		})
		.then((response) => {
			// always executed
		});  
	
	// Want to use async/await? Add the `async` keyword to your outer function/method.

	}
	

	render() { 
		console.log(this.state.cards);
		return(
			<div className="d-flex flex-wrap">
				{this.state.cards.map( card => (
					<Card 
						key={card.ID}
						imgUrl={card.hero_img_url}
						duration={card.duration}
						name={card.name}
						url={card.url}
						placesVisited={card.places_visited}
						priceCadHigh={card.price_cad_high}
					/>
				))}
			</div>

		);
	}
}
 
export default Cards;
import React, { Component } from 'react';
import Card from './card';
import axios from 'axios';

class Cards extends Component {
	state = { 
		cards: []
	 }
	
	componentDidMount() {
		this.getTrip();
	}
	
	// Want to use async/await? Add the `async` keyword to your outer function/method.
	getTrip = async () => { 
		try {
			const response =  await axios.get('https://canadavacations.com/wp-json/wp/v2/find-trips/');
			console.log(response.data);
			const cards = response.data;
			this.setState({ cards })
		} catch(error) {
			console.error(error);
		}
	}
	handleSorting = () => {
		
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
						priceCadLow={card.price_cad_low}
					/>
				))}
			</div>

		);
	}
}
 
export default Cards;
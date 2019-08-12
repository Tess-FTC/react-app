import React, { Component } from 'react';
import Card from './card';


class Cards extends Component {
	
	render() { 
		console.log(this.props.cards);
		return(
			<div className="d-flex flex-wrap">
				{this.props.cards.map( card => (
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
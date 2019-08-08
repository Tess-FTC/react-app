import React, { Component } from 'react';
import Card from './card';

class Cards extends Component {
	state = { 
		cards: [
			{
				"ID": 5503,
				"status": "publish",
				"name": "From Niagara Falls to Québec City by Rail",
				"description": "Experience the best of English and French Canada",
				"slug": "from-niagara-falls-to-quebec-city-by-rail",
				"url": "https://canadavacations.com/trips/from-niagara-falls-to-quebec-city-by-rail/",
				"trip_id": "217",
				"duration": "10",
				"hero_img_url": "https://s3-ca-central-1.amazonaws.com/staging.canadavacations.com/c120014_034rr3-640x427.jpg",
				"long_description": "From the natural wonders of Niagara Falls to the cities of Toronto, Ottawa, Montreal and Quebec City, this journey showcases the heartland of French and English Canada – and you do it all in comfort and style, on a train.",
				"region_categories": "Eastern Canada &amp; Maritimes",
				"things_categories": "History &amp; Culture|Summer Adventures|Train Journeys",
				"bms_trip_tags": "|Dinner|Meal|Foodie|Region: Niagara|Deluxe|4.5 star|Hotel|Comfort|4 star|Bus|Tour|Scheduled|Winter|Summer|Fall|Spring|Wine / Beer|Region: Ontario & Quebec |Lunch|Transfer|Private|SUV|Sedan / Car|Prov: Ontario|5 star|Train|Nature & Scenery|Van|Station|3.5 star|Guided|Sightseeing|History & Culture |Walking|Bike|Limousine|Downtown|Superior|Boutique|Active|Airport|Prov: Quebec |Family|Couples  50+ |",
				"price_cad_low": 2754,
				"price_cad_high": 4955.5,
				"price_usd_low": 2295,
				"price_usd_high": 4129.5,
				"starting_place": "Toronto",
				"places_visited": "Toronto|Niagara-on-the-Lake|Ottawa|Montreal|Quebec City",
				"availability": "2018-12-25|2019-04-28|2019-04-29|2019-10-31"
				},
				{
				"ID": 4799,
				"status": "publish",
				"name": "A Taste of France in North America",
				"description": "Ooo-La-La, a Taste of France!",
				"slug": "a-taste-of-france-in-north-america",
				"url": "https://canadavacations.com/trips/a-taste-of-france-in-north-america/",
				"trip_id": "210",
				"duration": "5",
				"hero_img_url": "https://s3-ca-central-1.amazonaws.com/staging.canadavacations.com/TQ-018336-640x427.jpg",
				"long_description": "Whether you are looking for romance, a fun time with friends or a short family vacation, it would be hard to beat this quick break for a flavor of France - short of flying to Paris itself. \nWe have included a carefully curated selection of the best tours and adventures in each city - so you can both enjoy your freedom and make the most of your brief time in ‘New France’.",
				"region_categories": "Eastern Canada &amp; Maritimes",
				"things_categories": "History &amp; Culture",
				"bms_trip_tags": "|Transfer|Limousine|Airport|Private|SUV|Van|Downtown|Sedan / Car|Region: Ontario & Quebec |Dinner|Meal|Foodie|Deluxe|5 star|Hotel|Superior|Boutique|4.5 star|Guided|Tour|Winter|Summer|Fall|Spring|Walking|Sightseeing|History & Culture |Bus|Scheduled|Bike|Active|Train|Nature & Scenery|Station|Comfort|3.5 star|Historic|Prov: Quebec |Prov: Nova Scotia |Family|Couples  50+ |",
				"price_cad_low": 1364,
				"price_cad_high": 2299,
				"price_usd_low": 1136.5,
				"price_usd_high": 1916,
				"starting_place": "Montreal",
				"places_visited": "Montreal|Quebec City",
				"availability": "2019-05-01|2019-05-28|2019-05-29|2019-10-16|2019-10-17|2019-10-31"
				},
				{
				"ID": 6932,
				"status": "publish",
				"name": "Ultimate Lords of the Wilderness",
				"description": "Grizzlies and Polar Bears in their Natural Habitats",
				"slug": "ultimate-lords-of-the-wilderness",
				"url": "https://canadavacations.com/trips/ultimate-lords-of-the-wilderness/",
				"trip_id": "219",
				"duration": "12",
				"hero_img_url": "https://s3-ca-central-1.amazonaws.com/staging.canadavacations.com/01874-10607.jpg-640x426.jpg",
				"long_description": "Traverse from the far west coast of Canada all the way to Hudson Bay to view grizzly bears and polar bears at the ideal viewing time. For just a special few weeks each year, witness both polar bears and grizzly bears in their natural habitat. From the lush and abundant Great Bear Rainforest, to the barren arctic tundra of Churchill, no safari better represents Canada’s immense diversity. Expert naturalist guides provide the story of these great animals as you focus on viewing and photography. For the true wildlife enthusiast, this is a vacation you will always remember.",
				"region_categories": "Canadian Rockies &amp; West Coast|North &amp; Arctic",
				"things_categories": "Polar Bears of Churchill|Wilderness Lodges|Wildlife &amp; Safaris",
				"bms_trip_tags": "|Deluxe|5 star|Hotel|Region: Vancouver West Coast & Mountains|Flight|Region: Vancouver Island|Wildlife|Wilderness|Safari|Nature & Scenery|Fall|Bears|Overnight |Prov: British Columbia|Region: Great Bear Rainforest|Transfer|Bus|Airport|Private|SUV|Van|Sedan / Car|Superior|4.5 star|Guided|Tour|Active|Adventure |Aboriginal / First Nations|History & Culture |Prov: Manitoba|Region: Prairies|Rental|Polar Bears|",
				"price_cad_low": 11077.5,
				"price_cad_high": 11306.5,
				"price_usd_low": 9231,
				"price_usd_high": 9421.5,
				"starting_place": "Vancouver",
				"places_visited": "Vancouver|Campbell River|Black Creek|Winnipeg|Churchill",
				"availability": "2019-09-25|2019-10-05|2019-10-08|2019-10-11|2020-09-27|2020-10-05|2020-10-08|2020-10-11"
				},
		]
	 }
	render() { 
		// console.log(this.state.cards[0].img_url);
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
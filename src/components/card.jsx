import React, { Component } from 'react';

class Card extends Component {
  state = {  }
  render() { 
    const { imgUrl, duration, name, url, placeVisited, priceCadHigh } = this.props;
    return ( 
        <div className="card" style={{ width: '30%' }}>
          <img src={imgUrl} className="card-img-top" alt={name} />
          <div className="card-body">
            <h5>{duration} Days</h5>
            <h3 className="card-title">{name}</h3>
            <p className="card-text">{placeVisited}</p>
            <p>{priceCadHigh}</p>
            <a href={url} className="btn btn-danger">See Details</a>
          </div>
        </div>
     );
  }
}
 
export default Card;
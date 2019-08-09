import React, { Component } from 'react';

class Card extends Component {
  state = {  }
  render() { 
    const { imgUrl, duration, name, url, placeVisited, priceCadLow } = this.props;
    return ( 
        <a className="card" style={{ width: '33.333%', textDecoration: 'none', color: '#000'}} href={url}>
          <img src={imgUrl} className="card-img-top" alt={name} style={{ height:'calc(16/9 * 9vw)' }}/>
          <div className="card-body">
            <h5>{duration} Days</h5>
            <h3 className="card-title">{name}</h3>
            <p className="card-text">{placeVisited}</p>
            <p>From ${priceCadLow}</p>
            <a href={url} className="btn btn-danger">See Details</a>
          </div>
        </a>
     );
  }
}
 
export default Card;
import React, { Component } from 'react';

class Card extends Component {
  state = {  }
  decodeEntities = (name) => {
    if (name.indexOf("&amp;") === -1){
      return name;
    } else {
      return name.replace(/&amp;/g, '&');
    }
  }

  render() { 
    const { imgUrl, duration, name, url, placeVisited, priceCadLow } = this.props;
    return ( 
        <a className="card" style={{ width: '33.333%', textDecoration: 'none', color: '#000'}} href={url}>
          <img src={imgUrl} className="card-img-top" alt={name} style={{ height:'calc(16/9 * 9vw)', maxHeight: '250px' }}/>
          <div className="card-body">
            <h5>{duration} Days</h5>
            <h3 className="card-title">{this.decodeEntities(name)}</h3>
            <p className="card-text">{placeVisited}</p>
            <p>From ${priceCadLow}</p>
            <button className="btn btn-danger">See Details</button>
          </div>
        </a>
     );
  }
}
 
export default Card;
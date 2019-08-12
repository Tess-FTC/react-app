import React, { Component } from 'react';

class Sorting extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
       <label htmlFor="trip-sort">Sort By:</label>
       <select name="" id="trip-select" onChange={this.props.handleSelect}>
         <option value="rating" >Traveller ratings</option>
         <option value="high-low" >Price: High-Low</option>
         <option value="low-high">Price: Low-High</option>
         <option value="a-z">Name: A-Z</option>
         <option value="z-a">Name: Z-A</option>
       </select>
      </div>
     );
  }
}
 
export default Sorting;
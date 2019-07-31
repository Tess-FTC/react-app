import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  
  handleDelete = (counterId) => {
    console.log("counter id", counterId);
    const counters = this.state.counters.filter( counter => counter.id !== counterId);
    this.setState({
      counters
    })
  };

  handleIncrement = (counter) => {
    
    const newcounters = [...this.state.counters];
    const index = newcounters.indexOf(counter);
    console.log(index);
    newcounters[index] = {...counter};
    newcounters[index].value++;
    console.log("Increment Click", newcounters, index);
    this.setState({
      counters: newcounters
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.counters.map(counter => (
          <Counter 
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}/>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;

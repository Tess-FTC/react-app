import React, { Component } from "react";

class Counter extends Component {
  state = {
    tags: ["tag1", "tag2", "tag3", "tag4", "tag5"]
  };
  formatCount = () => {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There's no tag.</p>;

    return (
      <ul>
        {this.state.tags.map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
      </ul>
    );
  };


  render() {
    const { counter, onIncrement, onDelete } = this.props;
    // console.log(counter);
    return (
      <React.Fragment>
        <span className={this.getbadgeStyle()}>{this.formatCount()}</span>
        <button className="btn btn-secondary" onClick={() => onIncrement( counter)}>
          Increment
        </button>
        <button className="btn btn-danger btn-sm m-2" onClick={() =>  onDelete( counter.id)}>Delete</button>
        <h2>Hello Again</h2>
      </React.Fragment>
    );
  }

  getbadgeStyle() {
    let numStyles = "badge m-2 badge-";
    numStyles += this.state.count === 0 ? "primary" : "warning";
    return numStyles;
  }
}

export default Counter;

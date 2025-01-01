import React, { Component } from 'react';

class Range extends Component {
  handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    this.props.onChange(value);
  };

  render() {
    const { value, min, max, step } = this.props;

    return (
      <div className="range">
        <input
          type="range"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={this.handleChange}
        />
        <span>{value}</span>
      </div>
    );
  }
}

export default Range;

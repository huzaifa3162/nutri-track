import React, { Component } from 'react';

class Output extends Component {
  // Convert cm to feet
  toFeet = (num) => {
    const realFeet = (num * 0.393700) / 12;
    const feet = Math.floor(realFeet);
    const inches = Math.round((realFeet - feet) * 12);
    return `${feet}'${inches}"`;
  };

  // Convert kg to lbs
  toLbs = (num) => {
    return Math.round(num / 0.45359237);
  };

  render() {
    const { height, weight, bmi, bmiClass } = this.props.data;
    const heightFeet = this.toFeet(height);
    const pounds = this.toLbs(weight);

    return (
      <div className="output">
        <h3>
          Height: {height} cm <span className="imperial">({heightFeet})</span>
        </h3>
        <h3>
          Weight: {weight} kg <span className="imperial">({pounds} lbs)</span>
        </h3>
        <h3>BMI: {bmi}</h3>
        <h3>Classification: {bmiClass}</h3>
      </div>
    );
  }
}

export default Output;

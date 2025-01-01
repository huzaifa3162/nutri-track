import React, { Component } from 'react';
import Range from './Range';
import Output from './Output';
import '../styles/bmi.css';
import Header from './Header';
import Footer from './Footer';

class Bmi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 175, // in cm
      weight: 73, // in kg
      bmi: 22.49,
      bmiClass: 'Normal',
    };
  }

  handleHeightChange = (value) => {
    this.setState({ height: value }, this.calculateBmi);
  };

  handleWeightChange = (value) => {
    this.setState({ weight: value }, this.calculateBmi);
  };

  calculateBmi = () => {
    const { height, weight } = this.state;
    const bmi = ((weight / (height * height)) * 10000).toFixed(2); // BMI formula
    this.setState({
      bmi: bmi,
      bmiClass: this.getBmiClass(bmi),
    });
  };

  getBmiClass = (bmi) => {
    if (bmi < 15.0) return 'Underweight';
    if (bmi >= 15.0 && bmi <= 24.9) return 'Normal';
    if (bmi >= 25 && bmi <= 29.9) return 'Overweight';
    return 'Obese';
  };

  render() {
    const { height, weight, bmi, bmiClass } = this.state;

    return (
      <>
        <Header />
        <div className="bmi-container">
          <div className="bmi-calculator">
            <h2>BMI Calculator</h2>
            <div className="bmi-controls">
              <div className="bmi-form-group">
                <label htmlFor="height">Height (cm)</label>
                <div className="bmi-range">
                  <input
                    type="range"
                    id="height"
                    min="100"
                    max="250"
                    step="1"
                    value={height}
                    onChange={(e) => this.handleHeightChange(e.target.value)}
                  />
                  <span>{height} cm</span>
                </div>
              </div>
              <div className="bmi-form-group">
                <label htmlFor="weight">Weight (kg)</label>
                <div className="bmi-range">
                  <input
                    type="range"
                    id="weight"
                    min="30"
                    max="200"
                    step="1"
                    value={weight}
                    onChange={(e) => this.handleWeightChange(e.target.value)}
                  />
                  <span>{weight} kg</span>
                </div>
              </div>
            </div>
            <Output data={{ height, weight, bmi, bmiClass }} />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Bmi;

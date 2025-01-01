import React from 'react';
import { Link } from 'react-router-dom';
import ficon from "../images/features-first-icon.png";
import hn from "../images/hn.png";
import DP from "../images/DP.png";
import Notes from "../images/Notes.png";
import "../styles/bootstrap.min.css"
import"../styles/font-awesome.css"
import "../styles/templatemo-training-studio.css"

const FeatureList = () => {
  const features = [
    {
      title: "BMI Calculator",
      description: "Determines your Body Mass Index by using your weight and height using your BMI calculator.",
      image: ficon,
      path: "/Bmi",
    },
    {
      title: "Health News",
      description: "Get the latest news about the fitness world and insights of what's happening.",
      image: hn,
      path: "/News",
    },
    {
      title: "Add Nutritions",
      description: "Write The Notes About Any health issues That You HAd To remember So keep Them In Notes.",
      image: Notes,
      path: "/Notes",
    },
    {
      title: "Diet Plan",
      description: "A Diet Plan is a guide outlining meals and nutrition goals tailored to promote health, manage weight dietary needs.",
      image: DP,
      path: "/Diet",
    },
  ];

  // The return statement is within the function scope
  return (
    <>
      {features.map((feature, index) => (
        <div className="col-lg-6" key={index}>
          <div className="feature-item">
            <div className="left-icon">
              <img src={feature.image} alt={`${feature.title} Icon`} />
            </div>
            <div className="right-content">
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
              <Link to={feature.path} className="text-button">
                Discover More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FeatureList;

import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DietPlans.css";
import weightGainImage from "../images/1.jpg";
import weightLossImage from "../images/2.jpg";
import ketoDietImage from "../images/3.jpg";
import Header from "./Header";

const DietPlans = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <Header />
      <div className="diet-plans-wrapper">
        <h1 className="diet-plans-title">Diet Plans According To Your Weight</h1>
        <div className="diet-plans-grid">
          <div
            className="diet-card weight-gain-card"
            onClick={() => handleNavigate("/WeightGainDietPlan")}
          >
            <img
              src={weightGainImage}
              alt="Weight Gain Diet"
              className="diet-card-image"
            />
            <h2 className="diet-card-title">Weight Gain</h2>
            <p className="diet-card-description">
              Follow a tailored diet plan to help you build muscle and achieve a
              healthy weight gain through nutritious, calorie-rich meals.
            </p>
          </div>

          <div
            className="diet-card weight-loss-card"
            onClick={() => handleNavigate("/WeightLossDietPlan")}
          >
            <img
              src={weightLossImage}
              alt="Weight Loss Diet"
              className="diet-card-image"
            />
            <h2 className="diet-card-title">Weight Loss</h2>
            <p className="diet-card-description">
              Designed for effective fat loss, this plan includes balanced meals
              that promote weight reduction while maintaining energy levels.
            </p>
          </div>

          <div
            className="diet-card keto-diet-card"
            onClick={() => handleNavigate("/KetoDietPlan")}
          >
            <img
              src={ketoDietImage}
              alt="Keto Diet"
              className="diet-card-image"
            />
            <h2 className="diet-card-title">Keto Diet</h2>
            <p className="diet-card-description">
              Embrace a low-carb, high-fat diet to help you burn fat for fuel and
              improve metabolic health while enjoying delicious meals.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DietPlans;

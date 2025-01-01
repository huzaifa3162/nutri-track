import React from 'react'
import FeatureList from './FeatureList'
import "../styles/bootstrap.min.css"
import"../styles/font-awesome.css"
import "../styles/templatemo-training-studio.css"
import "../fonts/flexslider-icon.svg";
import "../fonts/fontawesome-webfont.svg";
import "../fonts/slick.svg"
import wave from "../images/line-dec.png"
function Features() {
  return (
    <section className="section" id="features">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-heading">
            <h2>About <em>Us</em></h2>
            <img src={wave} alt="waves" />
            <p>NutriTrack provides a user-friendly interface for users to manage their meals, ingredients, and
              nutrition targets, offering a seamless and secure experience for healthier dietary choices.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Feature items */}
        <FeatureList/>
      </div>
    </div>
  </section>
  )
}

export default Features

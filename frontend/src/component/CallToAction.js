import React from 'react'
import "../styles/bootstrap.min.css"
import"../styles/font-awesome.css"
import "../styles/templatemo-training-studio.css"
import "../fonts/flexslider-icon.svg";
import "../fonts/fontawesome-webfont.svg";
import "../fonts/slick.svg"
import { Link } from 'react-router-dom';
function CallToAction() {
  return (
    <section className="section" id="call-to-action">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="cta-content">
            <h2>Don’t <em>think</em>, begin <em>today</em>!</h2>
            <p>Take charge of your health with NutriTrack! Don’t wait for the “right time” — start your journey to better nutrition today.</p>
            <div className="main-button">
              <Link to="/login">Signup OR Login Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CallToAction

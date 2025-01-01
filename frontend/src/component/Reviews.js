import React from 'react'
import ReviewList from './ReviewList'
import "../styles/bootstrap.min.css"
import"../styles/font-awesome.css"
import "../styles/templatemo-training-studio.css"
// import"../images"
import "../fonts/flexslider-icon.svg";
import "../fonts/fontawesome-webfont.svg";
import "../fonts/slick.svg"
import wave from "../images/line-dec.png"


function Reviews() {
  return (
    <section className="section" id="trainers">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-heading">
            <h2>Valuable <em>Reviews</em></h2>
            <img src={wave} alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        {/* Review items */}
        <ReviewList/>
      </div>
    </div>
  </section>
  )
}

export default Reviews

import React from "react";
import "../styles/bootstrap.min.css"
import"../styles/font-awesome.css"
import "../styles/templatemo-training-studio.css"
// import"../images"
import "../fonts/flexslider-icon.svg";
import "../fonts/fontawesome-webfont.svg";
import "../fonts/slick.svg"
import myvideo  from "../images/gym-video.mp4";
function MainBanner() {
  return (
    <div>
      <div className="main-banner" id="top">
        <video autoPlay muted loop id="bg-video">
          <source src={myvideo} type="video/mp4" />
        </video>
        <div className="video-overlay header-text">
          <div className="caption">
            <h2>
              Track your health <em>NutriTrack</em>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner;

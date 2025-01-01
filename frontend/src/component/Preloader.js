import React from "react";
import "../styles/bootstrap.min.css"
import"../styles/font-awesome.css"
import "../styles/templatemo-training-studio.css"
// import"../images"
import "../fonts/flexslider-icon.svg";
import "../fonts/fontawesome-webfont.svg";
import "../fonts/slick.svg"
function Preloader() {
  return (
    <div>
      <div id="js-preloader" className="js-preloader">
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;

// import React from 'react';
// import '../styles/About.css';
// import Header from "./Header"
// import "../styles/bootstrap.min.css"
// import"../styles/font-awesome.css"
// import "../styles/templatemo-training-studio.css"
// import Footer from './Footer';

// const About = () => {
//   return (
//     <>
//     <Header /> 

//             <section className="about-section" style={{margin:"100px"}}>
//                 <div className="container">
//                     <h2 className="about-heading">Why Choose NutriTrack?</h2>
//                     <div className="about-content" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
//                         <div className="about-text" style={{ maxWidth: "45%", color: "#7a7a7a", fontSize: "18px", lineHeight: "1.8" }}>
//                             <p>
//                                 NutriTrack revolutionizes the way you think about health and nutrition. It's not just an app; it's a lifestyle partner.
//                                 Designed to simplify your health journey, NutriTrack offers personalized recommendations and easy-to-use tools to
//                                 keep you on track.
//                             </p>
//                             <ul style={{ marginTop: "20px", listStyleType: "disc", paddingLeft: "20px" }}>
//                                 <li>Track your meals with ease and precision.</li>
//                                 <li>Get personalized insights into your eating habits.</li>
//                                 <li>Achieve fitness goals faster with tailored suggestions.</li>
//                                 <li>Access cutting-edge technology for accurate nutrition management.</li>
//                             </ul>
//                         </div>
//                         <div className="about-image" style={{ maxWidth: "50%" }}>
//                             <img src="https://miro.medium.com/v2/resize:fit:1200/1*8dTtAN4uVdWfcjqnd4UqPw.jpeg" alt="Healthy Lifestyle" style={{ maxWidth: "100%", borderRadius: "10px" }} />
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="about-section" style={{ backgroundColor: "#f8f9fa", padding: "50px 0" }}>
//                 <div className="container">
//                     <h2 className="about-heading">Our Mission</h2>
//                     <p style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto", color: "#7a7a7a", fontSize: "18px", lineHeight: "1.8" }}>
//                         At NutriTrack, our mission is to empower every individual to live a healthier and more balanced life.
//                         By providing cutting-edge tools and actionable insights, we aim to make healthy living accessible
//                         and enjoyable for everyone.
//                     </p>
//                 </div>
//             </section>

//            <Footer/>

    
//       </>
//   );
// };

// export default About;.


import React from 'react';
import "../styles/bootstrap.min.css"
import"../styles/font-awesome.css"
import "../styles/templatemo-training-studio.css"
// import"../images"
import Header from './Header';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <Header />

      <section className="about-section" style={{ padding: "100px 0" }}>
        <div className="container">
          <h2 className="section-heading">
            Why Choose <em>NutriTrack</em>?
          </h2>
          <div className="row align-items-center mt-5">
            {/* Text Content */}
            <div className="col-lg-6">
              <p style={{ color: "#7a7a7a", fontSize: "18px", lineHeight: "1.8" }}>
                NutriTrack revolutionizes the way you think about health and nutrition. It's not just an app; it's a lifestyle partner.
                Designed to simplify your health journey, NutriTrack offers personalized recommendations and easy-to-use tools to
                keep you on track.
              </p>
              <ul className="list-unstyled mt-4">
                <li className="mb-2">
                  <i className="fa fa-check-circle" style={{ color: "#ed563b", marginRight: "10px" }}></i>
                  Track your meals with ease and precision.
                </li>
                <li className="mb-2">
                  <i className="fa fa-check-circle" style={{ color: "#ed563b", marginRight: "10px" }}></i>
                  Get personalized insights into your eating habits.
                </li>
                <li className="mb-2">
                  <i className="fa fa-check-circle" style={{ color: "#ed563b", marginRight: "10px" }}></i>
                  Achieve fitness goals faster with tailored suggestions.
                </li>
                <li>
                  <i className="fa fa-check-circle" style={{ color: "#ed563b", marginRight: "10px" }}></i>
                  Access cutting-edge technology for accurate nutrition management.
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="col-lg-6 text-center">
              <img
                src="https://miro.medium.com/v2/resize:fit:1200/1*8dTtAN4uVdWfcjqnd4UqPw.jpeg"
                alt="Healthy Lifestyle"
                className="img-fluid rounded"
                style={{ border: "5px solid rgb(82, 81, 81)" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-section bg-light py-5">
        <div className="container">
          <h2 className="section-heading">
            Our <em>Mission</em>
          </h2>
          <p
            style={{
              textAlign: "center",
              maxWidth: "800px",
              margin: "30px auto 0",
              color: "#7a7a7a",
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            At NutriTrack, our mission is to empower every individual to live a healthier and more balanced life.
            By providing cutting-edge tools and actionable insights, we aim to make healthy living accessible
            and enjoyable for everyone.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;

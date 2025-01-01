// import Home from "./component/Home";
// import Notes from "./component/Notes";
// import About from "./component/About";
// import NoteState from "./context/notes/NoteState";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./component/Login";
// import Signup from "./component/Signup";
// import { useState } from "react";
// import Alert from "./component/Alert";
// import LoadingBar from "react-top-loading-bar";
// import News from "./component/News";
// import Bmi from "./component/Bmi";
// import Diet from "./component/Diet";
// import WeightGainDietPlan from "./component/WeightGainDietPlan"
// import WeightLossDietPlan from "./component/WeightLossDietPlan"
// import KetoDietPlan from "./component/KetoDietPlan"
// function App() {
//   const pageSize = 5;
//   const [progress, setProgress] = useState(0);
//   const apikey = process.env.REACT_APP_NEWS_API;

//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//     setAlert({ msg: message, type: type });
//     setTimeout(() => setAlert(null), 1500);
//   };

//   return (
//     <>
//       <NoteState>
//         <Router>
//           <Alert alert={alert} />
//           <LoadingBar color="#f11946" height={3} progress={progress} />
//           <Routes>
//             <Route path="/" element={<Home showAlert={showAlert} />} />
//             <Route path="/Home" element={<Home showAlert={showAlert} />} />
//             <Route path="/About" element={<About />} />
//             <Route path="/Login" element={<Login showAlert={showAlert} />} />
//             <Route path="/Signup" element={<Signup showAlert={showAlert} />} />
//             <Route path="/Notes" element={<Notes showAlert={showAlert} />} />
//             <Route path="/Bmi" element={<Bmi showAlert={showAlert} />} />
//             <Route path="/WeightGainDietPlan" element={<WeightGainDietPlan showAlert={showAlert} />} />
//             <Route path="/WeightLossDietPlan" element={<WeightLossDietPlan showAlert={showAlert} />} />
//             <Route path="/KetoDietPlan" element={<KetoDietPlan showAlert={showAlert} />} />
//             <Route path="/Diet/*" element={<Diet />} />
//             <Route
//               path="/News"
//               element={
//                 <News
//                   setProgress={setProgress}
//                   apikey={apikey}
//                   pageSize={pageSize}
//                   country="us"
//                   category="health"
//                 />
//               }
//             />
//             <Route path="*" element={<h1>404 - Page Not Found</h1>} />
//           </Routes>
//         </Router>
//       </NoteState>
//     </>
//   );
// }

// export default App;


import Home from "./component/Home";
import Notes from "./component/Notes";
import About from "./component/About";
import NoteState from "./context/notes/NoteState";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
import { useState } from "react";
import Alert from "./component/Alert";
import LoadingBar from "react-top-loading-bar";
import News from "./component/News";
import Bmi from "./component/Bmi";
import Diet from "./component/Diet";
import WeightGainDietPlan from "./component/WeightGainDietPlan";
import WeightLossDietPlan from "./component/WeightLossDietPlan";
import KetoDietPlan from "./component/KetoDietPlan";

function App() {
  const pageSize = 5;
  const [progress, setProgress] = useState(0);
  const apikey = process.env.REACT_APP_NEWS_API;

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  return (
    <>
      <NoteState>
        <Router>
          <Alert alert={alert} />
          <LoadingBar color="#f11946" height={3} progress={progress} />
          <Routes>
            {/* Redirect to Login when localhost starts */}
            <Route path="/" element={<Navigate to="/Login" />} />
            <Route path="/Home" element={<Home showAlert={showAlert} />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login showAlert={showAlert} />} />
            <Route path="/Signup" element={<Signup showAlert={showAlert} />} />
            <Route path="/Notes" element={<Notes showAlert={showAlert} />} />
            <Route path="/Bmi" element={<Bmi showAlert={showAlert} />} />
            <Route path="/WeightGainDietPlan" element={<WeightGainDietPlan showAlert={showAlert} />} />
            <Route path="/WeightLossDietPlan" element={<WeightLossDietPlan showAlert={showAlert} />} />
            <Route path="/KetoDietPlan" element={<KetoDietPlan showAlert={showAlert} />} />
            <Route path="/Diet/*" element={<Diet />} />
            <Route
              path="/News"
              element={
                <News
                  setProgress={setProgress}
                  apikey={apikey}
                  pageSize={pageSize}
                  country="us"
                  category="health"
                />
              }
            />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;

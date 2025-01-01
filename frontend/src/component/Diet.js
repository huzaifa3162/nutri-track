import { Routes, Route } from "react-router-dom";
import DietPlans from "./DietPlans";
import WeightGainDietPlan from "./WeightGainDietPlan";
import WeightLossDietPlan from "./WeightLossDietPlan";
import KetoDietPlan from "./KetoDietPlan";
import Header from "./Header"
import Footer from "./Footer"
function Diet() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<DietPlans />} />
      <Route path="/weight-gain-diet-plan" element={<WeightGainDietPlan />} />
      <Route path="/weight-loss-diet-plan" element={<WeightLossDietPlan />} />
      <Route path="/keto-diet-plan" element={<KetoDietPlan />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default Diet;

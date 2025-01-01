import React, { useState } from 'react';
import '../styles/WeightLossDietPlan.css';
import Header from "./Header";
import Footer from "./Footer";

export const WeightLossDietPlan = () => {
  const [weight, setWeight] = useState('');
  const [dietPlan, setDietPlan] = useState(null);

  const calculateDietPlan = () => {
    const calories = weight * 20 - 500; // Reduced calories for weight loss
    const protein = weight * 1.2; // Higher protein to preserve muscle mass
    const carbs = (calories * 0.4) / 4; // Reduced carbs
    const fats = (calories * 0.3) / 9;

    const plan = [
      {
        meal: 'Breakfast',
        items: [
          { name: 'Scrambled Egg Whites', quantity: '4', calories: 80, protein: 14 },
          { name: 'Whole Grain Toast', quantity: '1 slice', calories: 70, protein: 3 },
          { name: 'Mixed Berries', quantity: '1/2 cup', calories: 40, protein: 1 },
        ],
      },
      {
        meal: 'Snack',
        items: [
          { name: 'Low-Fat Cottage Cheese', quantity: '1/2 cup', calories: 100, protein: 14 },
          { name: 'Cucumber Slices', quantity: '1 cup', calories: 15, protein: 0.5 },
        ],
      },
      {
        meal: 'Lunch',
        items: [
          { name: 'Grilled Chicken Salad', quantity: '1 bowl', calories: 300, protein: 35 },
          { name: 'Olive Oil Dressing', quantity: '1 tbsp', calories: 120, protein: 0 },
          { name: 'Quinoa', quantity: '1/2 cup', calories: 110, protein: 4 },
        ],
      },
      {
        meal: 'Snack',
        items: [
          { name: 'Hard-Boiled Egg', quantity: '1', calories: 70, protein: 6 },
          { name: 'Apple', quantity: '1 medium', calories: 95, protein: 0.5 },
        ],
      },
      {
        meal: 'Dinner',
        items: [
          { name: 'Grilled Salmon', quantity: '100g', calories: 200, protein: 20 },
          { name: 'Steamed Asparagus', quantity: '1 cup', calories: 30, protein: 2 },
          { name: 'Mashed Cauliflower', quantity: '1/2 cup', calories: 50, protein: 2 },
        ],
      },
      {
        meal: 'Evening Snack',
        items: [
          { name: 'Almonds', quantity: '10', calories: 70, protein: 2 },
          { name: 'Green Tea', quantity: '1 cup', calories: 0, protein: 0 },
        ],
      },
    ];

    setDietPlan({ calories, protein, carbs, fats, plan });
  };

  return (
    <>
      <Header />
      <div className="weight-loss-container">
        <h1 className="weight-loss-title">Weight Loss Diet Plan</h1>
        <div className="weight-loss-input-section">
          <label htmlFor="weight" className="weight-loss-label">Enter your weight (kg): </label>
          <input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="weight-loss-input"
          />
          <button onClick={calculateDietPlan} className="weight-loss-button">Generate Diet Plan</button>
        </div>

        {dietPlan && (
          <div className="weight-loss-results-section">
            <h2 className="weight-loss-subtitle">Daily Nutritional Breakdown</h2>
            <p>Calories: {dietPlan.calories} kcal</p>
            <p>Protein: {dietPlan.protein} g</p>
            <p>Carbohydrates: {dietPlan.carbs.toFixed(1)} g</p>
            <p>Fats: {dietPlan.fats.toFixed(1)} g</p>

            <h2 className="weight-loss-subtitle">Meal Plan</h2>
            {dietPlan.plan.map((meal, index) => (
              <div key={index} className="weight-loss-meal-section">
                <h3 className="weight-loss-meal-title">{meal.meal}</h3>
                <ul className="weight-loss-meal-list">
                  {meal.items.map((item, idx) => (
                    <li key={idx} className="weight-loss-meal-item">
                      {item.name} - {item.quantity} ({item.calories} kcal, {item.protein} g protein)
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default WeightLossDietPlan;

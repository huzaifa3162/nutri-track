import React, { useState } from 'react';
import '../styles/WeightGainDietPlan.css';
import Header from "./Header";
import Footer from "./Footer";

const WeightGainDietPlan = () => {
  const [weight, setWeight] = useState('');
  const [dietPlan, setDietPlan] = useState(null);

  const calculateDietPlan = () => {
    const calories = weight * 20 + 500; // Simple formula for weight gain calories
    const protein = weight * 1.5; // Grams of protein per kg of weight
    const carbs = (calories * 0.5) / 4; // 50% of calories from carbs (1g = 4 kcal)
    const fats = (calories * 0.3) / 9; // 30% of calories from fats (1g = 9 kcal)

    const plan = [
      {
        meal: 'Breakfast',
        items: [
          { name: 'Oatmeal with Milk', quantity: '1 cup', calories: 150, protein: 6 },
          { name: 'Banana', quantity: '1 large', calories: 120, protein: 1.5 },
          { name: 'Boiled Eggs', quantity: '2', calories: 150, protein: 12 },
        ],
      },
      {
        meal: 'Snack',
        items: [
          { name: 'Peanut Butter Sandwich', quantity: '1', calories: 300, protein: 12 },
        ],
      },
      {
        meal: 'Lunch',
        items: [
          { name: 'Grilled Chicken Breast', quantity: '150g', calories: 250, protein: 40 },
          { name: 'Steamed Rice', quantity: '1 cup', calories: 200, protein: 4 },
          { name: 'Vegetables', quantity: '1 cup', calories: 50, protein: 2 },
        ],
      },
      {
        meal: 'Snack',
        items: [
          { name: 'Protein Shake', quantity: '1 scoop', calories: 150, protein: 25 },
        ],
      },
      {
        meal: 'Dinner',
        items: [
          { name: 'Salmon', quantity: '150g', calories: 350, protein: 30 },
          { name: 'Sweet Potato', quantity: '1 medium', calories: 100, protein: 2 },
          { name: 'Broccoli', quantity: '1 cup', calories: 50, protein: 3 },
        ],
      },
      {
        meal: 'Evening Snack',
        items: [
          { name: 'Greek Yogurt', quantity: '1 cup', calories: 100, protein: 10 },
          { name: 'Almonds', quantity: '10', calories: 70, protein: 2 },
        ],
      },
    ];

    setDietPlan({ calories, protein, carbs, fats, plan });
  };

  return (
    <>
      <Header />
      <div className="weight-gain-container">
        <h1 className="weight-gain-title">Weight Gain Diet Plan</h1>
        <div className="weight-gain-input-section">
          <label htmlFor="weight" className="weight-gain-label">Enter your weight (kg): </label>
          <input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="weight-gain-input"
          />
          <button onClick={calculateDietPlan} className="weight-gain-button">Generate Diet Plan</button>
        </div>

        {dietPlan && (
          <div className="weight-gain-results-section">
            <h2 className="weight-gain-subtitle">Daily Nutritional Breakdown</h2>
            <p>Calories: {dietPlan.calories} kcal</p>
            <p>Protein: {dietPlan.protein} g</p>
            <p>Carbohydrates: {dietPlan.carbs.toFixed(1)} g</p>
            <p>Fats: {dietPlan.fats.toFixed(1)} g</p>

            <h2 className="weight-gain-subtitle">Meal Plan</h2>
            {dietPlan.plan.map((meal, index) => (
              <div key={index} className="weight-gain-meal-section">
                <h3 className="weight-gain-meal-title">{meal.meal}</h3>
                <ul className="weight-gain-meal-list">
                  {meal.items.map((item, idx) => (
                    <li key={idx} className="weight-gain-meal-item">
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

export default WeightGainDietPlan;

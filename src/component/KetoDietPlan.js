import React, { useState } from 'react';
import '../styles/KetoDietPlan.css';
import Header from "./Header";
import Footer from "./Footer";

const KetoDietPlan = () => {
  const [weight, setWeight] = useState('');
  const [dietPlan, setDietPlan] = useState(null);

  const calculateDietPlan = () => {
    const calories = weight * 20; // Maintenance calories
    const protein = weight * 1.2; // Moderate protein
    const fats = (calories * 0.7) / 9; // High fat
    const carbs = (calories * 0.05) / 4; // Very low carbs

    const plan = [
      {
        meal: 'Breakfast',
        items: [
          { name: 'Scrambled Eggs with Cheese', quantity: '3 eggs, 30g cheese', calories: 300, protein: 22 },
          { name: 'Avocado', quantity: '1/2', calories: 120, protein: 1 },
          { name: 'Black Coffee', quantity: '1 cup', calories: 0, protein: 0 },
        ],
      },
      {
        meal: 'Snack',
        items: [
          { name: 'Almonds', quantity: '20', calories: 140, protein: 5 },
          { name: 'Celery with Peanut Butter', quantity: '2 sticks, 1 tbsp', calories: 90, protein: 3 },
        ],
      },
      {
        meal: 'Lunch',
        items: [
          { name: 'Grilled Chicken Thighs', quantity: '150g', calories: 250, protein: 30 },
          { name: 'Cauliflower Rice', quantity: '1 cup', calories: 50, protein: 2 },
          { name: 'Spinach Salad with Olive Oil', quantity: '1 cup', calories: 100, protein: 2 },
        ],
      },
      {
        meal: 'Snack',
        items: [
          { name: 'Boiled Egg', quantity: '1', calories: 70, protein: 6 },
          { name: 'Cheese Cubes', quantity: '30g', calories: 120, protein: 7 },
        ],
      },
      {
        meal: 'Dinner',
        items: [
          { name: 'Grilled Salmon', quantity: '150g', calories: 300, protein: 25 },
          { name: 'Zucchini Noodles with Pesto', quantity: '1 cup', calories: 120, protein: 3 },
          { name: 'Broccoli with Butter', quantity: '1 cup', calories: 100, protein: 2 },
        ],
      },
      {
        meal: 'Evening Snack',
        items: [
          { name: 'Keto Fat Bomb', quantity: '1 piece', calories: 200, protein: 2 },
          { name: 'Green Tea', quantity: '1 cup', calories: 0, protein: 0 },
        ],
      },
    ];

    setDietPlan({ calories, protein, carbs, fats, plan });
  };

  return (
    <>
      <Header />
      <div className="keto-diet-container">
        <h1 className="keto-diet-title">Keto Diet Plan</h1>
        <div className="keto-diet-input-section">
          <label htmlFor="weight" className="keto-diet-label">Enter your weight (kg): </label>
          <input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="keto-diet-input"
          />
          <button onClick={calculateDietPlan} className="keto-diet-button">Generate Diet Plan</button>
        </div>

        {dietPlan && (
          <div className="keto-diet-results-section">
            <h2 className="keto-diet-subtitle">Daily Nutritional Breakdown</h2>
            <p>Calories: {dietPlan.calories} kcal</p>
            <p>Protein: {dietPlan.protein} g</p>
            <p>Carbohydrates: {dietPlan.carbs.toFixed(1)} g</p>
            <p>Fats: {dietPlan.fats.toFixed(1)} g</p>

            <h2 className="keto-diet-subtitle">Meal Plan</h2>
            {dietPlan.plan.map((meal, index) => (
              <div key={index} className="keto-diet-meal-section">
                <h3 className="keto-diet-meal-title">{meal.meal}</h3>
                <ul className="keto-diet-meal-list">
                  {meal.items.map((item, idx) => (
                    <li key={idx} className="keto-diet-meal-item">
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

export default KetoDietPlan;

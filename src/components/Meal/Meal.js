import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Meal.css'
const Meal = () => {
    const [meals, setMeals] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    const addToOrder = (meal) => {
        const newCart = [...cart, meal]
        setCart(newCart)
    }
    return (
        <div className='meal-container'>
            <div className="food-container">
                {
                    meals.map(meal => <Food
                        key={meal.idMeal}
                        meal={meal}
                        addToOrder={addToOrder}>
                    </Food>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Meal;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Food.css'
const Food = ({ addToOrder, meal }) => {
    const { strMealThumb, strMeal, strCategory } = meal
    return (
        <div className='details-container'>
            <img src={strMealThumb} alt="" />
            <div className='title'>
                <h1>Name: {strMeal}</h1>
                <h2>Category: {strCategory}</h2>
            </div>
            <button onClick={() => addToOrder(meal)} className='order-btn'>
                <p>Order Now</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Food;
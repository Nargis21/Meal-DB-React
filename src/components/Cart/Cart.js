import './Cart.css'
const Cart = ({ cart }) => {
    console.log(cart)
    let name = []
    for (const meal of cart) {
        name.push(meal.strMeal)
    }
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <p>Selected Food: {cart.length}</p>
            <p>Food: {name}</p>
        </div>
    );
};

export default Cart;
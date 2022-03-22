import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    const quantityReducer = (previous, current) => previous + (current.quantity === 0 ? 1 : current.quantity);
    const priceReducer = (previous, current) => previous + (current.price * (current.quantity === 0 ? 1 : current.quantity));
    const shippingReducer = (previous, current) => previous + (current.shipping * (current.quantity === 0 ? 1 : current.quantity));

    const totalItems = cart.reduce(quantityReducer, 0);
    const totalPrice = cart.reduce(priceReducer, 0);
    const totalShippingCharge = cart.reduce(shippingReducer, 0);
    const totalTax = (totalPrice * 0.1).toFixed(2);
    const grandTotal = totalPrice + totalShippingCharge + parseFloat(totalTax);

    return (
        <div className='cart'>
            <h2 style={{ textAlign: 'center' }}>Order Summary</h2>
            <div className='cart-info'>
                <p>Selected Items: {totalItems}</p>
                <p>Total Price: $ {totalPrice}</p>
                <p>Total Shipping Charge: $ {totalShippingCharge}</p>
                <p>Tax: $ {totalTax}</p>
                <h3>Grand Total: $ {grandTotal.toFixed(2)}</h3>
            </div>
            <div className='cart-btn-container'>
                <button>
                    <p>Clear Cart</p>
                </button>
                <button>
                    <p>Review Order</p>
                </button>
            </div>
        </div>
    );
};

export default Cart;
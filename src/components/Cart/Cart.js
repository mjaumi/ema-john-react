import React from 'react';

const Cart = ({ cart }) => {

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Order Summary</h2>
            <div className='cart-info'>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: $</p>
                <p>Total Shipping Charge: $</p>
                <p>Tax: $</p>
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
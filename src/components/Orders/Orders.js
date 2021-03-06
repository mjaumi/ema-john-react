import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem.js/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import './Orders.css';

const Orders = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }

    return (
        <div>
            <div className='shop-container'>
                <div className='review-items-container'>
                    {
                        cart.map(item => <ReviewItem
                            key={item.id}
                            item={item}
                            handleRemoveProduct={handleRemoveProduct}
                        ></ReviewItem>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}>
                        <Link to='/shipment'>
                            <button>Proceed Shipping</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;
import './checkout.style.scss'
import { useContext } from 'react';
import CheckoutItem from './checkoutItem';
import { CartContext } from './../../context/cartContext'
import ConfirmOrder from './ConfirmOrder';
const CheckOut = () => {
    const { cartItems, cartTotal, cartItemCount } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>SL.no</span>
                </div>
                <div className='header-block'>
                    <span>Item Name</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} cartItemCount={cartItemCount} />
            ))}
            <div className='total'>TOTAL: ${cartTotal}</div>
            <ConfirmOrder></ConfirmOrder>
        </div>
    );
};

export default CheckOut;
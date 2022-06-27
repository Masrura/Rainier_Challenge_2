import { useContext, useState, useEffect } from 'react';

import { CartContext } from '../../context/cartContext';

import './checkoutItem.style.scss';

import useInventory from './../../hooks/useInventory'

const CheckoutItem = ({ cartItem, cartItemCount }) => {
    const { cartItems} = useContext(CartContext);
    const { id, name, imageUrl, price, quantity, slNo } = cartItem;
    const { clearItemFromCart, addItemToCart, removeItemFromCart } =
        useContext(CartContext);
    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <p>{slNo}</p>
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className='price'> {price}</span>
            <div className='remove-button' onClick={clearItemHandler}>
                &#10005;
            </div>
        </div>
    );
};

export default CheckoutItem;
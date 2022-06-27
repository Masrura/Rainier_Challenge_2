import { createContext, useState, useEffect } from "react";
import useInventory from "../hooks/useInventory";

const addCartItems = (cartItems, productToAdd,inventory) => {
    //Find if cat item has the product to add already
    console.log('inventory from cart', inventory);
    const foundProductFromInventory = inventory.find(i => i.product_id === productToAdd.id);

    productToAdd.price = foundProductFromInventory?.unit_price;
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (!existingCartItem && cartItems.length === 0) {
        productToAdd.slNo = cartItems.length + 1;
    }

    if (!existingCartItem && cartItems.length>0) {
        productToAdd.slNo = cartItems[cartItems.length - 1].slNo +1;
    }
    //if found increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }
    //return the new array of cart items
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const removeCartItems = (cartItems, cartItemToRemove) => {
    //Find if cat item has the product to add already
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
}

const clearCartItem = (cartItems, cartItemToClear) =>
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
    setIscartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
    cartItemCount: 0,
})

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);
   
    const [cartTotal, setCartTotal] = useState(0);
    const [inventory, setInventory] = useInventory();
    useEffect(() => {
        const count = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0)
        setCartItemCount(count);
    }, [cartItems]);

    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItems(cartItems, productToAdd, inventory));
    }
    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItems(cartItems, cartItemToRemove));
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    };

    const value = {  setIsCartOpen, addItemToCart, cartItems, cartItemCount, removeItemFromCart, clearItemFromCart, cartTotal };
    return <CartContext.Provider value={value}> {children}</CartContext.Provider>
}
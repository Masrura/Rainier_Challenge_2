import React from 'react';
import { useContext } from 'react';
import { CartContext } from './../context/cartContext';
import useInventory from './../hooks/useInventory'

const Product = (props) => {
    const product = props.product;
   
    let productPrice;
    const [inventory, setInventory] = useInventory();
    const { addItemToCart, cartTotal, cartItems } = useContext(CartContext);

    //  const findProductPrice = () => {
    //      const foundProduct = inventory.find(i => i.product_id === product.id);
    //      productPrice = foundProduct?.unit_price;
    //      product.price = productPrice;

    //      console.log('cart item is', product);

    //      console.log('cart items are', cartItems);

    //      console.log('cartTotal is', cartTotal);
    //     // return price;
    //    // setProductPrice(product.unit_price)
    // }
    
    const addProductToCart = () => {
       // findProductPrice();
        addItemToCart(product);
        //console.log('cart items are', cartItems);
    }
    
    return (
        <div className='flex py-20'>
            <img className='w-32 h-32' src="dummyImage.png" alt="" />
            <div>
                <p className='text-lg'>{product.name}</p>
                <p>{product.description.slice(0, 100)}</p>
            </div>
            <div>
                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white my-5 py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={addProductToCart}>Add to List</button>
                <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Details</button>
            </div>


        </div>
    );
};

export default Product;
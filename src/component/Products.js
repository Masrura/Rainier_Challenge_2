import React from 'react';
import useProducts from '../hooks/useProducts';
import Product from './Product'
const Products = () => {
    const [products, setProducts] = useProducts();

    return (
        <div className='grid grid-cols-2 gap-4'>
            {
                products.slice(0,25).map(product =>
                   <Product product = {product}></Product>
                )
            }
        </div>
    );
};

export default Products;
import React from 'react';
import CheckOut from './checkout/checkout';
import Products from './Products';

const ProductMain = () => {
    return (
        <div>
            <div className="grid grid-cols-5 gap-4">
                <div className="grid col-span-3 border-2 pl-10 pt-10"><Products></Products></div>
                <div className="grid col-span-2 border-2">
                    <CheckOut></CheckOut>
                </div>
            </div>
        </div>
       
    );
};

export default ProductMain;
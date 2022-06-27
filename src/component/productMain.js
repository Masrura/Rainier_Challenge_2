import React from 'react';
import CheckOut from './checkout/checkout';
import Products from './Products';

const ProductMain = () => {
    return (
        <div>
            <div className="grid grid-cols-5 gap-4">
                <div className="grid md:order-first sm:order-last md:col-span-3 sm:col-span-5 xs:col-span-5 border-2 pl-10 pt-10"><Products></Products></div>
                <div className="grid md:col-span-2 sm:col-span-5 xs:col-span-5 border-2">
                    <CheckOut></CheckOut>
                </div>
            </div>
        </div>
       
    );
};

export default ProductMain;
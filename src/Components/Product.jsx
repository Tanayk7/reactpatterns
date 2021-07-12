import React from 'react';
import './Product.css';

const Product = React.memo((props) => {
    console.log("RENDERING");

    return (
        <div className='product'>
            <div className="product-name">
                {props.name}
            </div>
            <div className="product-status">
                {props.status}
            </div>
        </div>
    );
});

export default Product;

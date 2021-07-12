import React from 'react';
import {useStore} from '../Patterns/Hook Store/store';
import Product from './Product';
import ProductForm from './ProductForm';

const Products = () => {
    const state = useStore()[0];
    return (
        <div>
            <ProductForm/>
            {   
                state.products.map(product => (
                    <Product key={product.id} name={product.name} status={product.status}/>
                ))
            }
        </div>
    );
}

export default Products;

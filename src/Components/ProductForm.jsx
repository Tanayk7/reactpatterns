import React from 'react';
import {useStore} from '../Patterns/Hook Store/store';

const ProductForm = () => {
    const [productName,setProductName] = React.useState("");
    const [productStatus,setProductStatus] = React.useState("");
    const dispatch = useStore(false)[1];

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let product = {
            name: productName,
            status: productStatus
        }

        dispatch('ADD_PRODUCT',product);
        setProductStatus("");
        setProductName("");
    }

    return (
        <form style={{marginBottom: '10px'}} onSubmit={onSubmitHandler}>
            <input placeholder='Enter product name' value={productName} onChange={(e) => setProductName(e.target.value)} required/>
            <input placeholder='Enter product status' value={productStatus} onChange={(e) => setProductStatus(e.target.value)} required/>
            <button type='submit'>Add product</button>
        </form>
    );
};

export default ProductForm;

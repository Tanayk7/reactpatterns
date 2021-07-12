import { initStore } from './store';

const products = [
    {
        id: '1',
        name: "Nvidia RTX 3080",
        status: "OUT OF STOCK"
    },
    {
        id: '2',
        name: "Nvidia RTX 3070",
        status: "OUT OF STOCK"
    },
    {
        id: '3',
        name: "Nvidia RTX 3060",
        status: "OUT OF STOCK"
    },
]

const configureStore = () => {
    const actions = {
        ADD_PRODUCT: (currentState, product) => {
            let allProducts = [...currentState.products];
            let product_to_add = {
                id: allProducts.length + 1,
                ...product
            }

            allProducts.push(product_to_add);
            return { products: allProducts };
        }
    }

    initStore(actions, { products: products })
}


export default configureStore;
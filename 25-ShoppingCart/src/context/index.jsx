// create conetxt
// provide the context
// wrap context in root
// consume the context using use context

import { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const ShoppingCartContext = createContext(null)

function ShoppingCartProvider({ children }) {
    const [loading, setloading] = useState(true)
    const [listofProduct, setlistofProduct] = useState([])
    const [productDetails, setproductDetails] = useState(null)
    const [cartItem, setcartItem] = useState([])
    const navigate = useNavigate()

    async function fetchListofProduct() {
        const apiResponse = await fetch('https://dummyjson.com/products')
        const result = await apiResponse.json()
        // console.log(result);

        if (result && result?.products) {
            setlistofProduct(result?.products)
            setloading(false)
        }
    }
    function handleAddToCart(getPrdductDetails) {
        console.log(getPrdductDetails);

        let cpExsitingCartItems = [...cartItem]
        const findIndexOfCurrentItem = cpExsitingCartItems.findIndex(cartItem => cartItem.id === getPrdductDetails.id)

        console.log(findIndexOfCurrentItem);
        if (findIndexOfCurrentItem === -1) {
            cpExsitingCartItems.push({
                ...getPrdductDetails,
                quantity: 1,
                totalPrice: getPrdductDetails?.price
            })
        }
        else {
            console.log('yahooo');

        }
        console.log(cpExsitingCartItems);
        setcartItem(cpExsitingCartItems)
        localStorage.setItem('cartItem', JSON.stringify(cpExsitingCartItems))
        navigate('/cart')

    }
    useEffect(() => {
        fetchListofProduct()
    }, [])
    console.log(cartItem);
    // always keep if condtion before retrun
    if (loading) return <h1>Loading Data. Plese Wait...</h1>

    return (<ShoppingCartContext.Provider value={{
        listofProduct,
        loading,
        setloading,
        productDetails,
        setproductDetails,
        handleAddToCart,
        cartItem
    }}>{children}</ShoppingCartContext.Provider>)
}

export default ShoppingCartProvider;

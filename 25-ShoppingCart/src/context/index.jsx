// create conetxt
// provide the context
// wrap context in root
// consume the context using use context

import { createContext, useEffect, useState } from "react";
import { json, Navigate, useNavigate } from "react-router-dom";

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
            cpExsitingCartItems[findIndexOfCurrentItem] = {
                ...cpExsitingCartItems[findIndexOfCurrentItem],
                quantity: cpExsitingCartItems[findIndexOfCurrentItem].quantity + 1,
                totalPrice: (cpExsitingCartItems[findIndexOfCurrentItem].quantity + 1) * cpExsitingCartItems[findIndexOfCurrentItem].price
            }
        }
        console.log(cpExsitingCartItems);
        setcartItem(cpExsitingCartItems)
        localStorage.setItem('cartItem', JSON.stringify(cpExsitingCartItems))
        navigate('/cart')

    }
    useEffect(() => {
        fetchListofProduct()
        setcartItem(JSON.parse(localStorage.getItem('cartItem') || []))
    }, [])

    console.log(cartItem);
    function handleRemoveFromCart(getPrdductDetails, isFullyRemoveFromCart) {
        let cpExsitingCartItems = [...cartItem]
        const findIndexOfCurrentItem = cpExsitingCartItems.findIndex(item => item.id === getPrdductDetails.id)

        if (isFullyRemoveFromCart) {
            cpExsitingCartItems.splice(findIndexOfCurrentItem, 1)
        }
        else {
            cpExsitingCartItems[findIndexOfCurrentItem] = {
                ...cpExsitingCartItems[findIndexOfCurrentItem],
                quantity: cpExsitingCartItems[findIndexOfCurrentItem].quantity - 1,
                totalPrice: (cpExsitingCartItems[findIndexOfCurrentItem].quantity - 1) * cpExsitingCartItems[findIndexOfCurrentItem].price
            }
        }
        localStorage.setItem('cartItem', JSON.stringify(cpExsitingCartItems))
        setcartItem(cpExsitingCartItems)
    }
    // always keep if condtion before retrun
    if (loading) return <h1>Loading Data. Plese Wait...</h1>

    return (<ShoppingCartContext.Provider value={{
        listofProduct,
        loading,
        setloading,
        productDetails,
        setproductDetails,
        handleAddToCart,
        cartItem,
        handleRemoveFromCart
    }}>{children}</ShoppingCartContext.Provider>)
}

export default ShoppingCartProvider;

import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { ShoppingCartContext } from "../../context";

export default function ProductDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { productDetails, setproductDetails, setloading, loading, handleAddToCart } = useContext(ShoppingCartContext)
    console.log(id);
    async function fetchProductDetails() {
        const apiResponse = await fetch(`https://dummyjson.com/products/${id}`)
        const result = await apiResponse.json()

        console.log(result);
        if (result) {
            setproductDetails(result)
            setloading(false)

        }
    }
    useEffect(() => {
        fetchProductDetails()
    }, [id])

    if (loading) return <h1>Fetching Product Details! Plese Wait!.. </h1>
    return (
        <div className="max-w-4xl p-6 mx-auto lg:max-w-7xl">
            <div className="grid items-center grid-cols-1 gap-12 p-6 shadow-sm lg:grid-cols-5">
                <div className="top-0 w-full text-center lg:col-span-3 lg:sticky">
                    <div className="relative px-4 py-10 shadow-lg rounded-xl">
                        <img
                            className="object-cover w-4/5 rounded"
                            src={productDetails?.thumbnail} alt={productDetails?.title} />
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 mx-auto mt-6">
                        {
                            productDetails?.images?.length ?
                                productDetails?.images?.map((imageItem) =>
                                    <div className="p-4 shadow-md rounded-xl" key={imageItem}>
                                        <img
                                            src={imageItem}
                                            alt='Product Secondary Image'
                                            className="w-24 cursor-pointer"
                                        />
                                    </div>
                                )

                                : null
                        }
                    </div>
                </div>
                <div className="lg:col-span-2">
                    <h2 className="text-4xl font-extrabold text-[#333333]">
                        {
                            productDetails?.title
                        }
                    </h2>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <p className="text-2xl font-extrabold">${productDetails?.price}</p>
                    </div>
                    <div>
                        <button onClick={() => handleAddToCart(productDetails)} className="min-w-[200px] px-4  py-3 border border-[#333] bg-transparent text-sm font-semibold rounded mt-5">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
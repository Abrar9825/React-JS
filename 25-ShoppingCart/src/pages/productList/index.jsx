import { useContext } from "react"
import { ShoppingCartContext } from "../../context"
import ProductTile from "../../components/productile";

export default function ProductList() {
    const { listofProduct } = useContext(ShoppingCartContext)
    console.log(listofProduct);

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-md mx-auto text-center">
                    <h2 className="text-3xl font-extralight text-gray-950 sm:text-4xl">
                        Our Featured Products
                    </h2>
                </div>
            </div>
            <div className="px-4 mx-auto mt-10 sm:px-6 lg:px-8 lg:mt-16">
                <div className="grid grid-cols-2 gap-5 lg:gap-8 lg:grid-cols-4">
                    {
                        listofProduct && listofProduct.length > 0 ?
                            listofProduct.map((item) => (
                                <ProductTile item={item} />
                            )) :
                            <h3>No Products</h3>
                    }
                </div>
            </div>
        </section>
    )
}
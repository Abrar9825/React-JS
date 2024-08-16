import { useContext } from "react"
import { ShoppingCartContext } from "../../context"
import { useNavigate } from "react-router-dom"
import CartTile from "../../components/carttile"

export default function CartListPage(params) {
    const { cartItem } = useContext(ShoppingCartContext)
    const navigate = useNavigate()

    return (
        <div className="max-w-5xl py-4 mx-auto max-md:max-w-xl">
            <h1 className="text-2xl font-bold text-center text-gray-800">My Cart Page</h1>
            <div className="grid gap-8 mt-12 md:grid-cols-3">
                <div className="space-y-4 md:col-span-2">
                    {
                        cartItem?.length
                            ? cartItem?.map((SingleCartItem) => <CartTile SingleCartItem={SingleCartItem} />)
                            : <h1>No Item is available in Cart Pelese Add Some Item in Cart</h1>
                    }
                </div>
                <div className="p-4 bg-gray-100 rounded-sm h-max">
                    <h3 className="pb-2 border-b border-gray-300 font-extrabold text-xl text-gray-950">Order Summary</h3>
                    <ul className="text-gray-700 mt-4 space-y-2">
                        <p className="flex flex-wrap gap-4 text-sm font-bold">
                            Total <span>
                                ${" "}{
                                    cartItem.reduce((acc, curr) => acc + curr.totalPrice, 0).toFixed(2)
                                }
                            </span>
                        </p>
                    </ul>
                    <div className="mt-5 flex gap-2 ">
                        <button
                            disabled={cartItem?.length === 0}
                            className="text-sm px-4 py-3 bg-black text-white font-extrabold disabled:opacity-50">
                            Checkout
                        </button>
                        <button onClick={() => navigate('/product')} className="text-sm px-4 py-3 bg-black text-white font-extrabold">Continue Shopping</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
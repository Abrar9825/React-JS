import { Fragment, useContext } from "react";
import { ShoppingCartContext } from "../../context";

export default function CartTile({ SingleCartItem }) {
    const { handleRemoveFromCart, handleAddToCart } = useContext(ShoppingCartContext)
    return (
        <Fragment>
            <div className="grid grid-cols-3 items-start gap-5">
                <div className="col-span-2 flex items-start gap-4">
                    <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm">
                        <img src={SingleCartItem?.thumbnail} className="w-full h-full object-contain" alt={SingleCartItem?.title} />
                    </div>
                    <div className="text-base font-bold text-gray-900">
                        <h3>{SingleCartItem.title}</h3>
                        <button onClick={() => handleRemoveFromCart(SingleCartItem, true)} className="text-sm px-4 py-3  bg-black text-white font-extrabold" >REMOVE</button>
                    </div>
                </div>
                <div className="ml-auto ">
                    <h3 className="text-lg font-bold text-gray-900">${SingleCartItem?.totalPrice.toFixed(2)}</h3>
                    <p className="mt-2 mb-3 font-bold text-[16px]">Quantity : {SingleCartItem?.quantity}</p>
                    <div className="mt-3">
                        <button
                            onClick={() => handleRemoveFromCart(SingleCartItem, false)}
                            className="disabled:opacity-50 border-[#000]  bg-white text-black"
                            disabled={SingleCartItem?.quantity === 1}
                        >-</button>
                        <button
                            className=" border-[#000] bg-white text-black"
                            onClick={() => handleAddToCart(SingleCartItem)}
                        >+</button>
                    </div>
                </div>
            </div>
            <hr className="border-gray-500" />
        </Fragment>
    )
}
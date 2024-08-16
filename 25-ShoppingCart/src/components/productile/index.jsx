import { useNavigate } from "react-router-dom";

export default function ProductTile({ item }) {
    const navigate = useNavigate()
    function HandleNavigateToProductDetailsPage(getCurrentProductId) {
        console.log(getCurrentProductId);
        navigate(`/productDetails/${getCurrentProductId}`)


    }
    return (
        <div className="p-6 border cursor-pointer reletive group border-cyan-700">
            <div className="overflow-hidden aspect-w-1 aspect-h-1" >
                <img src={item.thumbnail} alt={item.title}
                    className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125" />
            </div>
            <div className="flex items-start justify-between mt-4 space-x-4">
                <div className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                    <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">{item?.title}</p>
                </div>
                <div className="text-right">
                    <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]">{item?.price}</p>
                </div>
            </div>
            <button onClick={() => HandleNavigateToProductDetailsPage(item?.id)} className="w-full px-5 py-2 mt-5 text-lg font-bold text-white bg-black rounded-none">View Details</button>
        </div>
    )
}
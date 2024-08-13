import { useMemo, useState } from "react";
import UseFetch from "../../Hooks/use-fetch";

export default function MemoHooks() {
    const { data, loading, error } = UseFetch('https://dummyjson.com/products');
    const [flag, setFlag] = useState(false)

    const MemorizeVersion = useMemo(
        () => filterPrice(data?.products),
        [data?.products]
    )
    if (loading) return <h1>Loading...</h1>;
    // console.log(data);

    function filterPrice(get) {
        console.log("Function Calling");

        return get?.length > 0 ? get.filter(item => item.price > 10) : []
    }


    return (
        <div>
            <h1 style={{ color: flag ? 'red' : 'black' }}>This is Memo</h1>
            <button onClick={() => setFlag(!flag)}>Toggel Flag</button>

            <ul>
                {
                    MemorizeVersion.map(item => (
                        <li key={item.id}>
                            <h2>{item.title}</h2>
                        </li>
                    ))
                }
            </ul>
        </div >
    );
}

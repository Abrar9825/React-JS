import { memo } from "react"

function Counter({ countValue, onClick }) {
    console.log("This is Getting Renderd", countValue, onClick)
    return (
        <div>
            <h1>{countValue}</h1>

            <button onClick={onClick}>Click</button>
        </div>
    )
}

export default memo(Counter)
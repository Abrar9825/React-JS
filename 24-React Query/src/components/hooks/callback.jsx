import { useCallback, useState } from "react"
import Counter from "./callbackchild";

export default function CallbackHooks() {

    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const memorizesetCountOne = useCallback(() => setCount1(count1 + 1), [count1])
    const memorizesetCounttwo = useCallback(() => setCount2(count2 + 2), [count2])
    return (
        <div>
            <h1>This is call back</h1>
            <Counter countValue={count1} onClick={memorizesetCountOne} />
            <Counter countValue={count2} onClick={memorizesetCounttwo} />
        </div>
    )
}
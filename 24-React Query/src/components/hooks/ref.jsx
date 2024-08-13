import { useEffect, useRef } from "react"
// ref is mostly used for DOM 
export default function Hooksref(params) {
    const ConntValue = useRef(0)
    const divElement = useRef()
    const inputRef = useRef()


    function handleClick() {
        ConntValue.current++
        console.log(ConntValue.current);

    }
    useEffect(() => {


        inputRef.current.focus()
        const getDivRefrence = divElement.current
        getDivRefrence.style.color = 'red'

        setTimeout(() => {
            getDivRefrence.style.color = 'green'
            setTimeout(() => {

                getDivRefrence.style.color = 'blue'
            }, 1000);

        }, 2000);
        console.log(getDivRefrence);

    }, [])
    return (
        <div>
            <h1>Use Ref Use Call Back Use Memo</h1>
            <button onClick={handleClick}>click Me</button>
            <div ref={divElement}>Some Random text</div>
            <input type="text" name="name" ref={inputRef} />
        </div>
    )
}
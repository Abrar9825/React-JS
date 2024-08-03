import { useEffect, useState } from 'react';
import ProductItem from './component/productItem';
import './style.css'

const intialState = true
// in function argument is called props
function ProductList({ name, age, listofData }) {

    const [flag, setFalg] = useState(intialState)
    const [count, setCount] = useState(0)
    const [changeStyle, setChangeStyle] = useState(false)
    const handleToggleText = () => {
        setFalg(!flag)
    }
    useEffect(() => {
        setFalg(!flag)
        console.log("run only once");
        return () => {
            console.log("it work like a destructor");

        }

    }, [])
    useEffect(() => {
        if (count === 10) setChangeStyle(true)

    }, [count])
    console.log(changeStyle);

    function handleIncressCount() {
        setCount(count + 1)
    }
    return (
        <div>

            <h3 className='title'>Ecommerce Project</h3>
            <button onClick={handleToggleText}>toggle text</button>
            {/* <ProductItem/> */}
            {
                flag
                    ? <h4>{name} and {age}</h4>
                    : <h4>Hello</h4>
            }
            <div>
                <p>
                    <button style={{ backgroundColor: changeStyle ? "blue" : "white", color: changeStyle ? "red" : 'black' }} onClick={handleIncressCount}>Incress Count</button>
                    count is {count}
                </p>
            </div>
            <ul>
                {listofData.map((item, index) =>
                (
                    <ProductItem singleProductItem={item} key={index} />
                ))}
            </ul>
        </div>
    )
}

export default ProductList
import { useState } from 'react';
import ProductItem from './component/productItem';
import './style.css'

const intialState = true
// in function argument is called props
function ProductList({ name, age, listofData }) {

    const [flag, setFalg] = useState(intialState)

    const handleToggleText = () => {
        setFalg(!flag)
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
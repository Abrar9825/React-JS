import ProductItem from './component/productItem';
import './style.css'

// in function argument is called props
function ProductList({ name, age, listofData }) {
    const flag = true

    // function getFlag(flag) {
    //     return flag
    // ? <h2>My name is {name} and age is {age}</h2>
    // : <h2>Hello World</h2>
    // }

    // let textBlock = flag
    //     ? <h2>My name is {name} and age is {age}</h2>
    //     : <h2>Hello World</h2>

    let usingIf = null
    if (flag) {
        usingIf = (<h2>My name is {name} and age is {age}</h2>)
    }
    else {
        usingIf = <h2>Hello World</h2>

    }
    return (
        <div>

            <h3 className='title'>Ecommerce Project</h3>
            {/* <ProductItem/> */}

            {
                // getFlag(flag)
                // textBlock
                usingIf 
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
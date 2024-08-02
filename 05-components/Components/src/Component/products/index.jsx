import ProductItem from './component/productItem';

// in function argument is called props
function ProductList({ name, age, listofData }) {
    return (
        <div>
            <h3>Ecommerce Project</h3>
            {/* <ProductItem/> */}
            <h2>My name is {name} and age is {age}</h2>
            <ul>
                {listofData.map((item, index) =>
                (
                    <ProductItem singleProductItem={item} key={index}/>
                ))}
            </ul>
        </div>
    )
}

export default ProductList
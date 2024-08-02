function ButtonComponent() {
    return (
        <button>click</button>
    )
}
function ProductItem({ singleProductItem, key }) {
    return (
        <div key={key}>
            <p>{singleProductItem}</p>
            <ButtonComponent />
        </div>
    )
}

export default ProductItem
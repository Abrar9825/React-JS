import styles from './productItem.module.css';

function ButtonComponent() {
    return (
        <button className={styles.buttonstyle}>click</button>
    )
}
function ProductItem({ singleProductItem, key }) {
    return (
        <div style={{padding:"20px",border:"1px solid green"}} key={key}>
            <p>{singleProductItem}</p>
            <ButtonComponent />
        </div>
    )
}

export default ProductItem


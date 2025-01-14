import styles from "./products_container.module.css";
import Product from "../product/product"

export default function ProductsContainer(){
    return <>
        <div className={styles.container}>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    </>
}
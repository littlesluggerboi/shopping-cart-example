import styles from "./products_container.module.css";
import Product from "../product/product";
import { useParams } from "react-router-dom";
import { getProductsbyCategory } from "../../fetcher";
import StateGenerator from "../../stateGenerator";
import { useEffect } from "react";

const ProductsContainer = () => {
  const { category } = useParams();

  const [products, setProducts] = StateGenerator([]);
  useEffect(() => {
    getProductsbyCategory(category).then((values) => {
      setProducts(values);
    });
  }, [category]);

  return (
    <>
      <div className={styles.container}>
        {products.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsContainer;

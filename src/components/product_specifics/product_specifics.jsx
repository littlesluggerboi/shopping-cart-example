import styles from "./product_specifics.module.css";
import heartIcon from "../../assets/heart-outline.svg";
import shareIcon from "../../assets/export-variant.svg";
import starIcon from "../../assets/star.svg";
import { useNavigate, useParams } from "react-router-dom";
import { fetchWithId, validCategories, reversedMapping } from "../../fetcher";
import { useContext, useEffect } from "react";
import StateGenerator from "../../stateGenerator";
import { CartContext } from "../../providers/cartprovider";
import { WishListContext } from "../../providers/wishlistprovider";
const ProductSpecifics = () => {
  const { category, productid } = useParams();
  const [product, setProduct] = StateGenerator(null);
  const [count, setCount] = StateGenerator(1);
  const {addToWishList} = useContext(WishListContext);
  const { addItemToCart } = useContext(CartContext);

  function decreaseCount() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function increaseCount() {
    setCount(count + 1);
  }

  useEffect(() => {
    if (validCategories.has(category)) {
      fetchWithId(productid).then((value) => {
        if (reversedMapping.get(value.category) === category) {
          setProduct(value);
        }
      });
    }
  }, []);

  const navigate = useNavigate();
  

  function addToCart() {
    addItemToCart({
      product: product,
      quantity: count,
    });
  }

  return (
    <>
      {product ? (
        <div className={styles.specifics}>
          <img src={product.image} alt={product.title} />
          <div className={styles.details}>
            <div className={styles.pname}>
              <p>{product.title}</p>
              <div className={styles.actions}>
                <img src={shareIcon} alt="Share Icon" />
                <img src={heartIcon} alt="Heart Icon" onClick={()=>{
                  addToWishList(product);
                  navigate("/wishlist")
                }}/>
              </div>
            </div>

            <div className={styles.colors}>
              <div className={styles.color}></div>
              <div className={styles.color}></div>
              <div className={styles.color}></div>
            </div>
            <p>Color: 64 BLUE</p>

            <div className={styles.sizes}>
              <div className={styles.size + " " + styles.selected_size}>S</div>
              <div className={styles.size}>M</div>
              <div className={styles.size}>L</div>
              <div className={styles.size}>XL</div>
              <div className={styles.size}>XXL</div>
            </div>

            <div className={styles.price}>
              <h3>CUR&ensp;{product.price}</h3>
              <div className={styles.stars}>
                <span>{product.rating.rate}</span>
                <img src={starIcon} alt="Ratings Icon" />
                <img src={starIcon} alt="Ratings Icon" />
                <img src={starIcon} alt="Ratings Icon" />
                <img src={starIcon} alt="Ratings Icon" />
                <img src={starIcon} alt="Ratings Icon" />
                <span>({product.rating.count})</span>
              </div>
            </div>

            <div className={styles.quantity}>
              <button onClick={decreaseCount}>&#8722;</button>
              <span>{count}</span>
              <button onClick={increaseCount}>+</button>
            </div>

            <button onClick={()=>{
              addToCart();
              navigate("/cart")}} >Add to Cart</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductSpecifics;

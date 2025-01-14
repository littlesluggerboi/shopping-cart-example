import styles from "./product_specifics.module.css";
import productImage from "./pants.jpeg";
import heartIcon from "../../assets/heart-outline.svg";
import shareIcon from "../../assets/export-variant.svg";
import starIcon from "../../assets/star.svg";
export default function ProductSpecifics() {
  return (
    <>
      <div className={styles.specifics}>
        <img src={productImage} alt="Image of a product." />
        <div className={styles.details}>
          <div className={styles.pname}>
            <p>Dry Non Iron Jersey short sleeve shirtsleeve shirt</p>
            <div className={styles.actions}>
              <img src={shareIcon} alt="Share Icon" />
              <img src={heartIcon} alt="Heart Icon" />
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
            <h3>PHP&ensp;1,490.00</h3>
            <div className={styles.stars}>
              <img src={starIcon} alt="Ratings Icon" />
              <img src={starIcon} alt="Ratings Icon" />
              <img src={starIcon} alt="Ratings Icon" />
              <img src={starIcon} alt="Ratings Icon" />
              <img src={starIcon} alt="Ratings Icon" />
              <span>(123)</span>
            </div>
          </div>

          <div className={styles.quantity}>
              <button>&#8722;</button>
              <span>10</span>
              <button>+</button>
          </div>

          <button>Add to Cart</button>

        </div>
      </div>
    </>
  );
}

import styles from "./product.module.css";
import pants from "./pants.jpeg";
import heartIcon from "../../assets/heart-outline.svg";
import starIcon from "../../assets/star.svg";

export default function Product() {
  return (
    <>
      <div className={styles.product}>
        <img src={pants} alt="Product Image" />
        <div className={styles.flex}>
          <div className={styles.variations}>
            <div className={styles.variation + " " + styles.color1}></div>
            <div className={styles.variation + " " + styles.color2}></div>
            <div className={styles.variation + " " + styles.color3}></div>
          </div>
          <button className={styles.heart}>
            <img src={heartIcon} alt="" />
          </button>
        </div>
        <div className={styles.details}>
          <div className={styles.size}>
            <p>UNISEX</p>
            <p>S-XL</p>
          </div>
          <p className={styles.name}>Dry Non Iron Jersey Short Sleeve</p>
            <h3>PHP&ensp;1,999.00</h3>
          
          <div className={styles.rating}>
            <img src={starIcon} alt="" />
            <span>4.9</span>
            <span>(1171)</span>
          </div>
        </div>
      </div>
    </>
  );
}

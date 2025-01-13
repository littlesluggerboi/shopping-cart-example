import styles from "./product.module.css";
import pants from "./pants.jpeg";
import heartIcon from "../../assets/heart-outline.svg";
import starIcon from "./star.svg";

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
            <p>XXX</p>
          </div>
          <p className={styles.name}>Product Name</p>
          <div className={styles.price}>
            <span>PHP</span>
            <p>1,999.00</p>
          </div>
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

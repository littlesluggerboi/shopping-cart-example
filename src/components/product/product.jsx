import styles from "./product.module.css";
import heartIcon from "../../assets/heart-outline.svg";
import heartImg from "./heart.svg";
import starIcon from "../../assets/star.svg";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { WishListContext } from "../../providers/wishlistprovider";
import { reversedMapping } from "../../fetcher";

const Product = ({ item }) => {
  const { addToWishList, contains, removeFromWishList } =
    useContext(WishListContext);
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.product}>
        <img
          src={item.image}
          alt={item.title}
          onClick={() => {
            navigate(`/${reversedMapping.get(item.category)}/${item.id}`);
          }}
        />
        <div className={styles.flex}>
          <div className={styles.variations}>
            <div className={styles.variation + " " + styles.color1}></div>
            <div className={styles.variation + " " + styles.color2}></div>
            <div className={styles.variation + " " + styles.color3}></div>
          </div>
          <button
            onClick={() => {
              if (contains(item.id)) {
                removeFromWishList(item.id);
              } else {
                addToWishList(item);
              }
            }}
            className={styles.heart}
          >
            <img
              src={contains(item.id) ?heartImg : heartIcon}
              alt="Wish list icon"
            />
          </button>
        </div>
        <div className={styles.details}>
          <div className={styles.size}>
            <p>UNISEX</p>
            <p>S-XL</p>
          </div>
          <p
            onClick={() => {
              navigate(`/${reversedMapping.get(item.category)}/${item.id}`);
            }}
            className={styles.name}
          >
            {item.title}
          </p>
          <h3>CUR&ensp;{item.price}</h3>

          <div className={styles.rating}>
            <img src={starIcon} alt="Rating Icon" />
            <span>{item.rating.rate}</span>
            <span>({item.rating.count})</span>
          </div>
        </div>
      </div>
    </>
  );
};

Product.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
  }),
};

export default Product;

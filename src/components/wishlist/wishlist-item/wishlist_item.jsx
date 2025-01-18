import styles from "./wishlist-item.module.css";
import heartImg from "./heart.svg";
import PropTypes from "prop-types";

const WishListItem = ({ item, removeCallback }) => {
  return (
    <>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={item.image} alt={item.title} />
          <button
            onClick={() => {
              removeCallback(item.id);
            }}
          >
            <img src={heartImg} alt="Remove from wishlist." />
          </button>
        </div>
        <div className={styles.details}>
          <h4>{item.title}</h4>
          <p>Product ID: {item.id}</p>
          <p>Color: 35 BROWN</p>
          <p>Size: Men</p>
          <h3>CUR&ensp;{item.price}</h3>
        </div>
      </div>
    </>
  );
};

WishListItem.propTypes = {
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
  removeCallback: PropTypes.func,
};

export default WishListItem;

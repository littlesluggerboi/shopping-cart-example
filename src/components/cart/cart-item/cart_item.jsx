import styles from "./cart_item.module.css";
import PropTypes from "prop-types";
import { reversedMapping } from "../../../fetcher";
import { useNavigate} from "react-router-dom";
const CartItem = ({ item, removeCallback }) => {
  const navigate = useNavigate();
  const redirectToProduct = () => {
    navigate(
      `/${reversedMapping.get(item.product.category)}/${item.product.id}`
    );
  };
  return (
    <>
      <div className={styles.cartitem}>
        <img src={item.product.image} alt={item.product.title} onClick={redirectToProduct}/>
        <div className={styles.details}>
          <h3 onClick={redirectToProduct}>{item.product.title}</h3>
          <p>Color: 06 GRAY</p>
          <p>Size: Men M</p>
          <h4>CUR&ensp;{item.product.price}</h4>
          <div className={styles.quantity}>
            <div className={styles.total}>
              <h3>Quantity:&ensp;{item.quantity}</h3>
              <h3>
                Subtotal:&ensp;CUR&ensp;
                {Math.round(item.quantity * item.product.price * 100) / 100}
              </h3>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            removeCallback(item.product.id);
          }}
        >
          &#10005;
        </button>
      </div>
    </>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.shape({
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
    quantity: PropTypes.number,
  }),
  removeCallback: PropTypes.func,
};

export default CartItem;

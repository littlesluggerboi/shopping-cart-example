import styles from "./cart.module.css";
import CartItem from "./cart-item/cart_item";
import { useContext } from "react";
import { CartContext } from "../../providers/cartprovider";
import { useNavigate } from "react-router-dom";

const getTotal = (cart_items) => {
  let total = 0;
  for (let i = 0; i < cart_items.length; i++) {
    total += cart_items[i].product.price * cart_items[i].quantity;
  }
  return total;
};

const getItems = (cart_items) => {
  let numOfItems = 0;
  for (let i = 0; i < cart_items.length; i++) {
    numOfItems += cart_items[i].quantity;
  }
  return numOfItems;
};

const Cart = () => {
  const navigate = useNavigate();
  const cartObj = useContext(CartContext);
  const { cart, removeItemInCart } = cartObj;
  const total = getTotal(cart);
  const vat = total * 0.12;
  return (
    <>
      <div className={styles.cart_container}>
        <h2>Shopping Cart</h2>
        <div className={styles.cart}>
          {cart.length == 0 ? (
            <>
              <p>Your Shopping Cart is empty.</p>
            </>
          ) : (
            <div className={styles.cart_items}>
              {cart.map((value, index) => {
                return (
                  <>
                    <CartItem
                      key={value.product.id}
                      item={value}
                      removeCallback={removeItemInCart}
                    />
                    {index !== cart.length - 1 ? <hr /> : <></>}
                  </>
                );
              })}
            </div>
          )}
          <div className={styles.summary}>
            <div className={styles.receipt}>
              <h3>Order Summary | {getItems(cart)} item(s)</h3>
              <div className={styles.pair}>
                <p>Items(s) subtotal</p>
                <p>CUR&ensp;{Math.round(total * 100) / 100}</p>
              </div>
              <div className={styles.pair}>
                <h3>SUBTOTAL</h3>
                <h3>CUR&ensp;{Math.round(total * 100) / 100}</h3>
              </div>
              <div className={styles.pair}>
                <p>VAT included</p>
                <p>CUR&ensp;{Math.round(vat * 100) / 100}</p>
              </div>

              <div className={styles.pair}>
                <h3>ORDER TOTAL</h3>
                <h3>CUR&ensp;{Math.round((total + vat) * 100) / 100}</h3>
              </div>
            </div>
            <div className={styles.checkout}>
              <button>checkout</button>
              <button
                onClick={() => {
                  navigate("/");
                }}
              >
                continue shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

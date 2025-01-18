import { createContext } from "react";
import StateGenerator from "../stateGenerator";
import PropTypes from "prop-types";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = StateGenerator([]);
  const contains = (id) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product.id === id) return true;
    }
    return false;
  };
  const addItemToCart = (item) => {
    if (!contains(item.product.id)) {
      setCart([...cart, item]);
    } else {
      setCart(
        cart.map((val) => {
          if (val.product.id == item.product.id) {
            const updateVal = {
              ...val,
              quantity: item.quantity + val.quantity,
            };
            return updateVal;
          } else {
            return val;
          }
        })
      );
    }
  };

  const removeItemInCart = (id) => {
    setCart(
      cart.filter((val) => {
        return val.product.id !== id;
      })
    );
  };

  const cartObj = {
    cart,
    addItemToCart,
    removeItemInCart,
  };

  return (
    <CartContext.Provider value={cartObj}>{children}</CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};

export default CartProvider;

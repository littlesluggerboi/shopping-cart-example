import { createContext } from "react";
import StateGenerator from "../stateGenerator";
import PropTypes from "prop-types";

export const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [wishlist, setwishlist] = StateGenerator([]);
  const contains = (id) => {
    for (let i = 0; i < wishlist.length; i++) {
      if (wishlist[i].id === id) return true;
    }
    return false;
  };

  const addToWishList = (item) => {
    if (!contains(item.id)) {
      setwishlist([...wishlist, item]);
    }
  };

  const removeFromWishList = (id) => {
    if (contains(id)) {
      setwishlist(
        wishlist.filter((val) => {
          return val.id !== id;
        })
      );
    }
  };

  const wishListObj = {
    wishlist,
    addToWishList,
    removeFromWishList,
    contains,
  };

  return (
    <WishListContext.Provider value={wishListObj}>
      {children}
    </WishListContext.Provider>
  );
};

WishListProvider.propTypes = {
  children: PropTypes.node,
};

export default WishListProvider;

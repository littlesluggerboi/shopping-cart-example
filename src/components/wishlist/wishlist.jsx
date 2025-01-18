import styles from "./wishlist.module.css";
import WishListItem from "./wishlist-item/wishlist_item";
import { useContext } from "react";
import { WishListContext } from "../../providers/wishlistprovider";

const WishList = () => {
  const { wishlist, removeFromWishList } = useContext(WishListContext);
  return (
    <>
      <div className={styles.wishlist_container}>
        <h2>Wish List</h2>
        <div className={styles.wishlist}>
          <p>{wishlist.length} Items(s)</p>

          {wishlist.length === 0 ? (
            <>
              <div className={styles.noitems}>
                <h3>Your Wish List has no Items</h3>
                <p>Press the heart mark to add items on your wishlist.</p>
              </div>
            </>
          ) : (
            <>
              {wishlist.map((val, index) => {
                return (
                  <>
                    
                    <WishListItem key={val.id} item={val} removeCallback={removeFromWishList}/>
                    {index === wishlist.length -1 ? <></> : <hr /> }
                  </>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default WishList;

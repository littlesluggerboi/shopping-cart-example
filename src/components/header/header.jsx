import styles from "./header.module.css";
import heartIcon from "../../assets/heart-outline.svg";
import cartIcon from "../../assets/cart-outline.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav className={styles.header}>
          <Link to="/">
            <div className={styles.logo}>
              <div>
                <img src="logo.svg" alt="Selldom logo" />
              </div>
              <h1>Selldom</h1>
            </div>
          </Link>
          <ul>
            <Link to="/men">MEN</Link>
            <Link to="/women">WOMEN</Link>
            <Link to="/electronics">ELECTRONICS</Link>
            <Link to="/jewelery">JEWELERY</Link>
          </ul>
          <div className={styles.img_group}>
            <Link to={'/wishlist'}>
              <img src={heartIcon} alt="Heart Icon" />
            </Link>
            <Link to={'/cart'}>
              <img src={cartIcon} alt="Cart Icon" />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

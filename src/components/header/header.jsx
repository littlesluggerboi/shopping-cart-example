import styles from "./header.module.css";
import heartIcon from "../../assets/heart-outline.svg";
import cartIcon from "../../assets/cart-outline.svg";
export default function Header() {
  return (
    <>
      <header>
        <nav className={styles.header}>
          <div className={styles.logo}>
            <div>
              <img src="logo.svg" alt="Selldom logo" />
            </div>
            <h1>Selldom</h1>
          </div>
          <ul>
            <li>MEN</li>
            <li>WOMEN</li>
            <li>KIDS</li>
            <li>BABY</li>
          </ul>
          <div className={styles.img_group}>
            <img src={heartIcon} alt="Heart Icon" />
            <img src={cartIcon} alt="Cart Icon" />
          </div>
        </nav>
      </header>
    </>
  );
}

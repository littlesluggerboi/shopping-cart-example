import styles from "./footer.module.css";
import fbIcon from "./facebook.svg";
import instaIcon from "./instagram.svg";
import twitterIcon from "./twitter.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styles.information}>
          <div className={styles.group}>
            <h3>About Selldom</h3>
            <p>Information</p>
            <p>Careers</p>
            <p>Sustainability</p>
            <p>Online Gift Service</p>
          </div>

          <div className={styles.group}>
            <h3>Help</h3>
            <p>FAQ</p>
            <p>Return Policy</p>
            <p>Bulk Order</p>
            <p>Accessibility</p>
          </div>

          <div className={styles.group}>
            <h3>Account</h3>
            <p>Selldom App</p>
            <p>Membership</p>
            <p>Profile</p>
            <p>Coupons</p>
          </div>

          <div className={styles.group}>
            <h3>E-Newsletter</h3>
            <p>
              Sign up and be the first-in the know about new arrivals,
              promotions, in-store events and more
            </p>
            <h4>Subscribe Now</h4>
          </div>

          <div className={styles.group}>
            <h3>Selldom Social Account</h3>
            <div className={styles.img_group}>
              <img src={fbIcon} alt="Facebook Icon" />
              <img src={twitterIcon} alt="Twitter Icon" />
              <img src={instaIcon} alt="Instagram Icon" />
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.copyright}>
          <p>Copyright &copy; Selldom Co., LTD. allrights reserved.</p>
          <div className={styles.terms}>
            <p>Terms of use</p>
            <p>Privacy Policy</p>
          </div>
        </div>

      </footer>
    </>
  );
}

export default Footer;
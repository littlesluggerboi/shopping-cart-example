import styles from "./topicbox.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { reversedMapping } from "../../fetcher";

const TopicBox = ({ item }) => {
  return (
    <>
      <Link to={`${reversedMapping.get(item.category)}/${item.id}`}>
        <div className={styles.topic}>
          <img src={item.image} alt={item.title} />
          <p className={styles.title}>{item.title}</p>
          <p className={styles.description}>CUR&ensp;{item.price}</p>
        </div>
      </Link>
    </>
  );
};

TopicBox.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default TopicBox;

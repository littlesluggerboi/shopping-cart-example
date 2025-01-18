import styles from "./productgroup.module.css";
import TopicBox from "../topicbox/topicbox";
import PropTypes from "prop-types";
const ProductGroup = ({ groupTitle, items }) => {
  return (
    <>
      <h3 className={styles.grouptitle}>{groupTitle}</h3>
      <div className={styles.productgroup}>
        {items.map((item) => (
          <TopicBox key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

ProductGroup.propTypes = {
  groupTitle: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
};

export default ProductGroup;

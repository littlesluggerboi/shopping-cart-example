import { useState } from "react";
import styles from "./slides_show.module.css";
import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";

const images = [img1, img2, img3, img4];
export default function SlideShow() {
  const [num, setNum] = useState(0);
  function left() {
    if (num <= 0) {
      setNum(images.length - 1);
    } else {
      setNum(num - 1);
    }
  }
  function right() {
    if (num >= images.length - 1) {
      setNum(0);
    } else {
      setNum(num + 1);
    }
  }

  return (
    <>
      <div className={styles.slide}>
        <img src={images[num]} alt="Slide show image" />
        <a onClick={left}>&#10094;</a>
        <a onClick={right}>&#10095;</a>
        <div className={styles.indicators}>
          {images.map((value, index) => {
            return (
              <>
                <div
                  key={value}
                  className={
                    styles.indicator +
                    " " +
                    (index === num ? styles.selected : "")
                  }
                  onClick={() => {
                    setNum(index);
                  }}
                ></div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

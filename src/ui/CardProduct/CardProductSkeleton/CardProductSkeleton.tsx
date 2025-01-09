import React from "react";
import styles from "./CardProductSkeleton.module.scss";

const CardProductSkeleton: React.FC = () => {
  return (
    <div className={styles.skeleton}>
      <div className={styles.skeleton__img}></div>
      <div className={styles.skeleton__title}></div>
    </div>
  );
};

export default CardProductSkeleton;

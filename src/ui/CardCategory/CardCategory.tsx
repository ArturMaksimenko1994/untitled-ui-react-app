import { Link } from "react-router";
import CardCategorySkeleton from "./CardCategorySkeleton/CardCategorySkeleton";

import styles from "./CardCategory.module.scss";
import placeholderImage from "./../../assets/img/card/woocommerce-placeholder.webp";

interface CardProductProps {
  slug: string | null;
  name: string | null;
  imageLink: string | null;
  altText: string | null;
  isLoading?: boolean;
}

const CardCategory = ({ slug, name, imageLink, altText, isLoading }: CardProductProps) => {

  if (isLoading) {
    return <CardCategorySkeleton />;
  }

  return (
    <div className={styles.card}>
      <Link className={styles.card__link} to={`/categories${slug}`} />
      <img src={imageLink || placeholderImage} alt={altText || "Изображение категории"} />
      <h3>{name}</h3>
    </div>
  )
};

export default CardCategory;

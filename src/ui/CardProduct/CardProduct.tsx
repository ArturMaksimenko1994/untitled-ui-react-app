import { Link } from "react-router";
import CardProductSkeleton from "./CardProductSkeleton/CardProductSkeleton";
import styles from "./CardProduct.module.scss";
import placeholderImage from "./../../assets/img/card/woocommerce-placeholder.webp";

interface CardProductProps {
  slug?: string | null;
  name?: string | null;
  price?: string | null;
  regularPrice?: string | null;
  imageLink?: string | null;
  altText?: string | null;
  isLoading?: boolean;
}

const CardProduct = ({ slug, name, price, regularPrice, imageLink, altText, isLoading }: CardProductProps) => {
  if (isLoading) {
    return <CardProductSkeleton />;
  }

  // Преобразование строк в массивы чисел
  const priceArray = price?.split(",").map(p => parseFloat(p.trim())) || [];
  const regularPriceArray = regularPrice?.split(",").map(rp => parseFloat(rp.trim())) || [];

  // Выбор минимальной цены
  const minPrice = Math.min(...priceArray);
  const minRegularPrice = Math.min(...regularPriceArray);

  // Проверка на скидку
  const isDiscounted = minRegularPrice > minPrice;

  return (
    <div className={styles.card}>
      <Link className={styles.card__link} to={`/categories${slug}`} />
      <img src={imageLink || placeholderImage} alt={altText || "Изображение продукта"} />
      <h3>{name}</h3>

      <span className={`${styles.card__regular} ${isDiscounted ? styles.discount : ""}`}>Цена: {minRegularPrice} ₽</span>

      {isDiscounted && (
        <>
          <span className={styles.card__sale}>Распродажа</span>
          <p>Акция: {minPrice} ₽</p>
        </>
      )}
    </div>
  );
};

export default CardProduct;


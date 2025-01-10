import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import getProduct from '../../graphql/queries/getProduct';
import ProductGallery from './ProductGallery/ProductGallery';

import styles from './PageProduct.module.scss';

const PageProduct: React.FC = () => {
  const { productSlug } = useParams<{ productSlug: string }>();

  const { data, loading, error } = useQuery(getProduct, {
    variables: { slug: productSlug },
  });

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  const product = data?.product;

  console.log("product", product);

  if (!product) return <p>Продукт не найден.</p>;

  // Извлекаем только изображения product
  const galleryImages = product.galleryImages?.nodes.map((image: any) => ({
    sourceUrl: image.sourceUrl,
    thumbUrl: image.thumbUrl || image.sourceUrl, // Используем основное изображение, если нет миниатюры
    altText: image.altText || 'Изображение товара',
  })) || [];

  return (
    <>
      <section className={styles.product}>
        <div className="container">

          <div className={styles.product__row}>

            <ProductGallery images={galleryImages} />

            {/* ProductDetails */}

            <div className={styles.product__details}>

              <h1 className="h1">{product.name}</h1>

              <p className={styles.product__sku}>Артикул - {product.sku}</p>

              <p>Цена: {product.price} ₽</p>
              {product.regularPrice && product.price && (
                <p>Старая цена: <s>{product.regularPrice} ₽</s></p>
              )}
            </div>

            <div className={styles.product__actions}>
              Цена доставки <br />
              Будет описание всего
            </div>
          </div>
        </div>
      </section>

      <section className={styles.description}>
        <div className="container">
          <div className={styles.description__row}>
            <div className="h2">Описание</div>
            <div className="gutenberg-content" dangerouslySetInnerHTML={{ __html: product.description }}></div>
          </div>
        </div>
      </section>

      <section className={styles.specifications}>
        <div className="container">
          <div className={styles.specifications__row}>
            <p>тут будут характеристики</p>
          </div>
        </div>
      </section>

      <section className={styles.popular}>
        <div className="container">
          <div className={styles.popular__row}>
            <p>популярное</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageProduct;

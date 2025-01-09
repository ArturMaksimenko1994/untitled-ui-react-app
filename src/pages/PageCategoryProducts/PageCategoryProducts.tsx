import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import getCategoryData from '../../graphql/queries/getCategoryData';
import ProductList from '../../components/ProductList/ProductList';
import styles from './PageCategoryProducts.module.scss';

const PageCategoryProducts: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const { data, loading, error } = useQuery(getCategoryData, {
    variables: { categorySlug },
  });

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  if (!data?.productCategories?.edges.length) {
    return <p>Категория не найдена.</p>;
  }

  const category = data.productCategories.edges.find((edge: any) => edge.node.slug === categorySlug);

  if (!category) {
    return <p>Категория не найдена.</p>;
  }

  const { name, description } = category.node;

  return (
    <>
      <section className={styles.products}>
        <div className="container">
          <div className={styles.products__title}>
            <h1 className="h2">{name || 'Отсуствует'}</h1>
          </div>
        </div>
      </section>

      <ProductList />

      <section className={styles.description}>
        <div className="container">
          <div className="gutenberg-content" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </section>
    </>
  );
};

export default PageCategoryProducts;

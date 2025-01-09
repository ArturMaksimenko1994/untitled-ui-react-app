import React from 'react';
import { useQuery } from '@apollo/client';
import CardCategory from '../../ui/CardCategory/CardCategory';
import getCategoryData from "../../graphql/queries/getCategoryData";
import styles from "./PageCategories.module.scss";

const PageCategories: React.FC = () => {
  const { data, loading, error } = useQuery(getCategoryData);

  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <section className={styles.category}>
      <div className="container">
        <div className={styles.category__row}>
          <h1 className="h1">Категории</h1>

          {loading ? (
            <ul className={styles.category__list}>
              {Array.from({ length: 4 }).map((_, index) => (
                <li key={index} className={styles.category__item}>
                  <CardCategory isLoading={true} slug={null} name={null} imageLink={null} altText={null} />
                </li>
              ))}
            </ul>
          ) : (
            data.productCategories.edges.length === 0 ? (
              <p>Категории не найдены.</p>
            ) : (
              <ul className={styles.category__list}>
                {data.productCategories.edges.map(({ node }: any) => (
                  <li key={node.id} className={styles.category__item}>
                    <CardCategory
                      slug={`/${node.slug}`}
                      name={node.name}
                      imageLink={node.image?.link || ""}
                      altText={node.image?.altText || "Изображение категории"}
                    />
                  </li>
                ))}
              </ul>
            )
          )}

        </div>
      </div>
    </section>
  );
};

export default PageCategories;

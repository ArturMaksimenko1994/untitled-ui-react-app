import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import getAdditionalDetailsBySlug from '../../graphql/queries/getAdditionalDetailsBySlug';
import PageNotFound from '../PageNotFound/PageNotFound';

import styles from "./PageStoreDetails.module.scss"
import AsideLinks from './AsideLinks/AsideLinks';

const PageStoreDetails: React.FC = () => {

  const { slug } = useParams();
  const { data, loading, error } = useQuery(getAdditionalDetailsBySlug, {
    variables: { slug },
  });

  if (!data || !data.post) {
    return <PageNotFound />;
  }

  return (
    <section className={styles.page}>
      <div className="container">
        <h1 className="h1">{data.post.title}</h1>
        <div className={styles.page__row}>

          <AsideLinks />

          <div className={styles.page__content}>
            {loading ? (
              <p>Загрузка...</p>
            ) : error ? (
              <p>Ошибка: {error.message}</p>
            ) : (
              <div className="gutenberg-content" dangerouslySetInnerHTML={{ __html: data.post.content }} />
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PageStoreDetails;

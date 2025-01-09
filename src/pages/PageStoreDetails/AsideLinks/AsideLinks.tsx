import React from 'react';
import { useQuery } from '@apollo/client';
import { Link, useLocation } from 'react-router-dom';
import GET_STORE_DETAILS from '../../../graphql/queries/getAllAdditionalDetails';

import styles from "./AsideLinks.module.scss";

const AsideLinks: React.FC = () => {
  const { data, loading, error } = useQuery(GET_STORE_DETAILS);
  const location = useLocation(); // Получаем текущий путь

  return (
    <aside className={styles.aside}>
      <ul className={styles.list}>

        {loading && <p>Загрузка...</p>}

        {error && <p>Ошибка: {error.message}</p>}

        {!loading && !error && data?.posts?.edges?.map(({ node }: any) => {
          const isActive = location.pathname === `/${node.slug}`;
          return (
            <li key={node.id} className={isActive ? styles.active : ''}>
              <Link to={`/${node.slug}`}>
                {node.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default AsideLinks;

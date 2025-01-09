import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import getAllAdditionalDetails from '../../graphql/queries/getAllAdditionalDetails';

import styles from "./Header.module.scss";

const Header = () => {

  const { data, loading, error } = useQuery(getAllAdditionalDetails);

  return (
    <header className={styles.header}>

      <div className={styles.header__top}>
        <div className="container">
          <div className={styles['header__top-row']}>

            <ul className={styles.header__helpful}>
              {/* Проверка на загрузку и ошибку */}
              {loading && <p>Загрузка...</p>}
              {error && <p>Ошибка: {error.message}</p>}

              {/* Рендерим только если данные загружены и есть записи */}
              {data?.posts?.edges?.length > 0 ? (
                data.posts.edges.map(({ node }: any) => (
                  <li key={node.id}>
                    <Link to={`/${node.slug}`}>
                      {node.title}
                    </Link>
                  </li>
                ))
              ) : (
                !loading && !error && <p>Нет доступных записей</p> // Показать только если нет ошибок и не в процессе загрузки
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.header__center}>
        <div className="container">
          <div className={styles['header__center-row']}>
            <div className={styles.header__logo}>LOGO</div>
            <div className={styles.header__search}>
              <input placeholder="Поиск" />
            </div>
            <div className={styles['header__account-nav']}>
              <Link to="/wishlist">Избранное</Link>
              <Link to="/orders">Заказы</Link>
              <Link to="/account">Войти</Link>
              <Link to="/cart">Корзина</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.header__bottom}>
        <div className="container">
          <div className={styles['header__bottom-row']}>
            <Link to="/">Главная</Link>
            <Link to="/categories">Категории</Link>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;

// const startTime = performance.now(); // Засекаем время начала запроса

// const { data, loading, error } = useQuery(GET_STORE_DETAILS, {
//   fetchPolicy: 'network-only',
//   onCompleted: () => {
//     const endTime = performance.now(); // Засекаем время завершения запроса
//     console.log(`Время выполнения запроса: ${(endTime - startTime).toFixed(2)} мс`);
//   },
//   onError: (error) => {
//     const endTime = performance.now();
//     console.log(`Запрос завершился с ошибкой за ${(endTime - startTime).toFixed(2)} мс: ${error.message}`);
//   }
// });

import { useQuery } from '@apollo/client';
import getAllAdditionalDetails from '../../graphql/queries/getAllAdditionalDetails';

import styles from "./Footer.module.scss";
import { Link } from 'react-router';

const Footer = () => {

  const { data, loading, error } = useQuery(getAllAdditionalDetails);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles['footer__row']}>
          <div className={styles.footer__logo}>LOGO</div>

          <div className={styles.footer__info}>
            <div className={styles.footer__nav}>
              <h2>Информация</h2>
              <ul className={styles.footer__helpful}>
                {data.posts.edges.map(({ node }: any) => (
                  <li key={node.id}>
                    <Link to={`/${node.slug}`}>
                      {node.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.footer__products}>Продукция</div>
            <div className={styles.footer__contact}>Контакты</div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;


// import React, { useEffect, useState } from 'react';
// import styles from "./Footer.module.scss";
// import { Link } from 'react-router-dom'; // Исправлено для использования правильного роутинга

// const Footer = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       console.time('FetchPosts'); // Начало замера времени

//       try {
//         const response = await fetch('https://store.untitled-ui-api.ru/wp-json/wp/v2/posts');
//         if (!response.ok) {
//           throw new Error(`Ошибка: ${response.statusText}`);
//         }
//         const data = await response.json();
//         console.timeEnd('FetchPosts'); // Конец замера времени

//         console.log("Полученные данные:", data);
//         setPosts(data);
//       } catch (err) {
//         console.timeEnd('FetchPosts'); // Завершаем таймер даже в случае ошибки
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (loading) return <p>Загрузка...</p>;
//   if (error) return <p>Ошибка: {error}</p>;

//   return (
//     <footer className={styles.footer}>
//       <div className="container">
//         <div className={styles['footer__row']}>
//           <div className={styles.footer__logo}>LOGO</div>

//           <div className={styles.footer__info}>
//             <div className={styles.footer__nav}>
//               <h2>Информация</h2>
//               <ul className={styles.footer__helpful}>
//                 {posts.map((post) => (
//                   <li key={post.id}>
//                     <Link to={`/${post.slug}`}>
//                       {post.title.rendered}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className={styles.footer__products}>Продукция</div>
//             <div className={styles.footer__contact}>Контакты</div>
//           </div>

//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import getLlistProducts from "../../graphql/queries/getLlistProducts";
import CardProduct from "../../ui/CardProduct/CardProduct";
import styles from "./ProductList.module.scss";

const ProductList: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const itemsPerPage = 12;

  const { data, loading, error } = useQuery(getLlistProducts, {
    variables: {
      categorySlug,
      first: itemsPerPage,
      after: null,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (error) {
    return <p>Ошибка: {error.message}</p>;
  }

  return (
    <div className={styles.product}>
      <div className="container">
        <div className={styles.product__row}>
          <div className={styles.list}>

            {loading && !data ? (
              Array.from({ length: itemsPerPage }).map((_, index) => (
                <div key={index} className={styles.list__item}>
                  <CardProduct isLoading />
                </div>
              ))
            ) : (
              data?.products?.nodes?.map((product: any) => (
                <div key={product.id} className={styles.product__item}>
                  <CardProduct
                    slug={`/${categorySlug}/${product.slug}`}
                    name={product.name}
                    price={product.price}
                    regularPrice={product.regularPrice}
                    imageLink={product.image?.sourceUrl}
                    altText={product.image?.altText}
                  />
                </div>
              ))
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

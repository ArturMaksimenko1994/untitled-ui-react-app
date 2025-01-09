import PageHome from "./PageHome/PageHome";

import PageCategories from "./PageCategories/PageCategories";
import PageCategoryProducts from "./PageCategoryProducts/PageCategoryProducts";
import PageProduct from "./PageProduct/PageProduct";

import PageStoreDetails from "./PageStoreDetails/PageStoreDetails";
import PageNotFound from "./PageNotFound/PageNotFound";

const routes = [
  {
    path: "/",
    element: <PageHome />,
  },
  {
    path: "/:slug",
    element: <PageStoreDetails />,
  },
  {
    path: "/categories",
    element: <PageCategories />,
  },
  {
    path: "/categories/:categorySlug",
    element: <PageCategoryProducts  />,
  },
  {
    path: "/categories/:categorySlug/:productSlug",
    element: <PageProduct  />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

export default routes;

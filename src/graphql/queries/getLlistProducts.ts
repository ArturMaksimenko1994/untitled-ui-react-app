import { gql } from '@apollo/client';

const getLlistProducts = gql`
query getLlistProducts($categorySlug: String!, $first: Int!, $after: String) {
  products(
    where: {
      category: $categorySlug
    }
    first: $first
    after: $after
  ) {
    pageInfo {
      hasNextPage
      endCursor
    }
    found
    nodes {
      id
      name
      slug
      image {
        sourceUrl
        altText
      }
      ... on SimpleProduct {
        price(format: RAW)
        regularPrice(format: RAW)
      }
      ... on VariableProduct {
        price(format: RAW)
        regularPrice(format: RAW)
      }
    }
  }
}
`;

export default getLlistProducts;

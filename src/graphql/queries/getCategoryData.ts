import { gql } from '@apollo/client';

const getCategoryData = gql`
  query {
    productCategories(where: { parent: null }) {
      edges {
        node {
          id
          slug
          name
          description
          image {
            link
            altText
          }
        }
      }
    }
  }
`;

export default getCategoryData;


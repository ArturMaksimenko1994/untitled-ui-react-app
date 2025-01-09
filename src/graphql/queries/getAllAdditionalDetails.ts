import { gql } from '@apollo/client';

const getAllAdditionalDetails = gql`
query GetStoreDetails {
  posts(where: {categoryName: "store-details"}, first: 10) {
    edges {
      node {
        id
        title
        slug
      }
    }
  }
}
`;

export default getAllAdditionalDetails;

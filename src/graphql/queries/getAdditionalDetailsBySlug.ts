import { gql } from '@apollo/client';

const getAdditionalDetailsBySlug = gql`
  query GetStoreDetailBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
    }
  }
`;

export default getAdditionalDetailsBySlug;


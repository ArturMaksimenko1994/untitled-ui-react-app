import { gql } from '@apollo/client';

const getProduct = gql`
query getProduct($slug: ID!) {
  product(id: $slug, idType: SLUG) {
    ... on VariableProduct {
      id
      name
      sku
      price(format: RAW)
      regularPrice(format: RAW)
      variations {
        nodes {
          id
          sku
          price(format: RAW)
          regularPrice(format: RAW)
          attributes {
            nodes {
              name
              value
            }
          }
        }
      }
    }
    ... on SimpleProduct {
      id
      name
      sku
      price(format: RAW)
      regularPrice(format: RAW)
    }
    description(format: RENDERED)
    averageRating
    reviewCount
    reviews(first: 5) {
      nodes {
        content(format: RAW)
        author {
          name
        }
      }
    }
    productCategories(first: 3) {
      nodes {
        name
      }
    }
    galleryImages {
      nodes {
        sourceUrl(size: MEDIUM_LARGE)
        altText
      }
    }
  }
}
`;

export default getProduct;



// query getProduct($slug: ID!) {
//   product(id: $slug, idType: SLUG) {
//     ... on VariableProduct {
//       id
//       name
//       sku
//       price(format: RAW)
//       regularPrice(format: RAW)
//       variations {
//         nodes {
//           id
//           sku
//           price(format: RAW)
//           regularPrice(format: RAW)
//           attributes {
//             nodes {
//               name
//               value
//             }
//           }
//         }
//       }
//     }
//     ... on SimpleProduct {
//       id
//       name
//       sku
//       price(format: RAW)
//       regularPrice(format: RAW)
//     }
//     description(format: RENDERED)
//     averageRating
//     reviewCount
//     reviews(first: 5) {
//       nodes {
//         content(format: RAW)
//         author {
//           name
//         }
//       }
//     }
//     productCategories(first: 3) {
//       nodes {
//         name
//       }
//     }
//     galleryImages {
//       nodes {
//         sourceUrl(size: MEDIUM_LARGE)
//         altText
//       }
//     }
//     upsell {
//       nodes {
//         ... on SimpleProduct {
//           id
//           name
//           price(format: RAW)
//           regularPrice(format: RAW)
//           description(format: RAW)
//           galleryImages {
//             nodes {
//               sourceUrl(size: MEDIUM_LARGE)
//               altText
//             }
//           }
//         }
//         ... on VariableProduct {
//           id
//           name
//           price(format: RAW)
//           regularPrice(format: RAW)
//           description(format: RAW)
//           galleryImages {
//             nodes {
//               sourceUrl(size: MEDIUM_LARGE)
//               altText
//             }
//           }
//         }
//         ... on ExternalProduct {
//           id
//           name
//           price(format: RAW)
//           regularPrice(format: RAW)
//           externalUrl
//           buttonText
//         }
//       }
//     }
//   }
// }
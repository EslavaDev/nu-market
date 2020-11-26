import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProduct {
    viewer {
      offers {
        id
        price
        product {
          id
          name
          description
          image
        }
      }
    }
  }
`;

export const BUY_PRODUCT = gql`
  mutation BuyProduct($id: ID!) {
    purchase(offerId: $id) {
      success
      errorMessage
      customer {
        balance
      }
    }
  }
`;

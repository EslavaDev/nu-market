import { gql } from '@apollo/client';

export const GET_CUSTOMER = gql`
  query GetCustomer {
    viewer {
      id
      name
      balance
    }
  }
`;
export const GET_CUSTOMER_BALANCE = gql`
  query GetCustomerBalance {
    viewer {
      balance
    }
  }
`;

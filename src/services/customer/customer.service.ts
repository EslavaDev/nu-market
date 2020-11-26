import { GET_CUSTOMER, GET_CUSTOMER_BALANCE } from './customer.query';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

export class CustomerService {
  constructor(private client: ApolloClient<NormalizedCacheObject>) {}

  async getCustomer() {
    return this.client.query({ query: GET_CUSTOMER });
  }
  async getCustomerBalance() {
    return this.client.query({ query: GET_CUSTOMER_BALANCE });
  }
}

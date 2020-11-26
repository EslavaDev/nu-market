import { BUY_PRODUCT, GET_PRODUCTS } from './product.query';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';

export class ProductService {
  constructor(private client: ApolloClient<NormalizedCacheObject>) {}

  async getProductCatalog() {
    return this.client.query({ query: GET_PRODUCTS });
  }
  async buyProduct(id: string) {
    return this.client.mutate({
      mutation: BUY_PRODUCT,
      variables: {
        id,
      },
    });
  }
}

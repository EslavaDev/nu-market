import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { CustomerService } from './customer/customer.service';
import { ProductService } from './product/product.service';

class ApiClient {
  ProductService!: ProductService;
  CustomerService!: CustomerService;

  buildServices = ({ apiUrl, token }: Record<string, string>) => {
    const cache = new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            project: {
              merge(existing, incoming) {
                return incoming;
              },
            },
          },
        },
      },
    });
    const httpLink = createHttpLink({
      uri: apiUrl,
    });

    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
        },
      };
    });

    const client = new ApolloClient({
      cache: cache,
      link: authLink.concat(httpLink),
      name: 'nu-market',
      queryDeduplication: false,
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'cache-and-network',
        },
      },
    });

    this.ProductService = new ProductService(client);
    this.CustomerService = new CustomerService(client);
  };
}

export const apiClient = new ApiClient();

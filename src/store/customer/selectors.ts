import { compose } from 'redux';

const rootState = (state: ReduxState) => {
  return state.customer;
};

export const getCustomerData = compose((customerState) => {
  return customerState.customer || ({} as Customer);
}, rootState);

export const getLoaderCustomer = compose((customerState) => {
  return customerState.loading;
}, rootState);

export const getCustomerWallet = compose((customerState) => {
  return customerState.balance;
}, getCustomerData);

export const getCustomerName = compose((customerState) => {
  return customerState.name;
}, getCustomerData);

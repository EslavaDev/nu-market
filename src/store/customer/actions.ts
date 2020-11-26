import { mapperCustomer } from './mapper';

export const fetchCustomer: AsyncAction = () => {
  return async (dispatch, _getState, { CustomerService }) => {
    dispatch({
      type: '@@CUSTOMER/LOAD_CUSTOMER',
    });
    try {
      const { data } = await CustomerService.getCustomer();
      console.log(mapperCustomer(data));
      dispatch({
        type: '@@CUSTOMER/LOAD_CUSTOMER_DONE',
        payload: mapperCustomer(data),
      });
    } catch (error) {
      dispatch({
        type: '@@CUSTOMER/LOAD_CUSTOMER_FAILED',
        error: 'Error al consultar los datos de la cuenta',
      });
    }
  };
};
export const fetchCustomerBalance: AsyncAction = () => {
  return async (dispatch, _getState, { CustomerService }) => {
    dispatch({
      type: '@@CUSTOMER/LOAD_CUSTOMER',
    });
    try {
      const { data } = await CustomerService.getCustomerBalance();
      dispatch(updateBalance(data.viewer?.balance || 0));
    } catch (error) {
      dispatch({
        type: '@@CUSTOMER/LOAD_CUSTOMER_FAILED',
        error: 'Error al consultar el balance',
      });
    }
  };
};
export const updateBalance = (balance: number) => ({
  type: '@@CUSTOMER/LOAD_CUSTOMER_BALANCE_DONE',
  payload: balance,
});

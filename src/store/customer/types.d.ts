interface Customer {
  id: number;
  name: string;
  balance: number;
}
/**
 * CUSTOMER REDUCER ACTIONS
 */
type CustomerActions =
  | { type: '@@CUSTOMER/LOAD_CUSTOMER' }
  | { type: '@@CUSTOMER/LOAD_CUSTOMER_DONE'; payload: Customer }
  | { type: '@@CUSTOMER/LOAD_CUSTOMER_BALANCE_DONE'; payload: number }
  | { type: '@@CUSTOMER/LOAD_CUSTOMER_FAILED' };

/**
 * CUSTOMER REDUX STATE
 */
interface CustomerState {
  loading: boolean;
  customer?: Customer;
}

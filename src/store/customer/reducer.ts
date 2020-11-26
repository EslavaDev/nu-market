import { Reducer } from 'redux';
import { initState } from './init-state';

export const customerReducer: Reducer<CustomerState, SupportedActions> = (
  state = initState,
  action,
) => {
  switch (action.type) {
    case '@@CUSTOMER/LOAD_CUSTOMER': {
      return {
        ...state,
        loading: true,
      };
    }

    case '@@CUSTOMER/LOAD_CUSTOMER_DONE': {
      return {
        ...state,
        customer: action.payload,
        loading: false,
      };
    }
    case '@@CUSTOMER/LOAD_CUSTOMER_BALANCE_DONE': {
      return {
        ...state,
        customer: {
          ...state.customer,
          balance: action.payload,
        },
        loading: false,
      };
    }

    case '@@CUSTOMER/LOAD_CUSTOMER_FAILED': {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

import { Reducer } from 'redux';
import { initState } from './init-state';

export const configReducer: Reducer<ConfigState, SupportedActions> = (
  state = initState,
  action,
) => {
  switch (action.type) {
    case '@@CONFIG/LOAD': {
      return {
        ...state,
        loading: true,
      };
    }

    case '@@CONFIG/LOAD_DONE': {
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    }

    case '@@CONFIG/LOAD_FAILED': {
      return {
        ...state,
        loading: false,
      };
    }

    case '@@CONFIG/SET_PROPERTY': {
      return {
        ...state,
        ...action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

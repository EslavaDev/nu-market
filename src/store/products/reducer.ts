import { Reducer } from 'redux';
import { initState } from './init-state';

export const catalogReducer: Reducer<CatalogState, SupportedActions> = (
  state = initState,
  action,
) => {
  switch (action.type) {
    case '@@PRODUCT/LOAD_PRODUCT': {
      return {
        ...state,
        loading: true,
      };
    }

    case '@@PRODUCT/LOAD_PRODUCT_DONE': {
      return {
        ...state,
        catalog: action.payload.catalog,
        mapCatalog: action.payload.mapCatalog,
        loading: false,
      };
    }

    case '@@PRODUCT/LOAD_PRODUCT_FAILED': {
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

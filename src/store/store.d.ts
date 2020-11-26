import { ThunkAction } from 'redux-thunk';
import { apiClient } from '../services';

type ThunksArgs = typeof apiClient;
declare global {
  type SupportedActions = any | ConfigActions;

  interface ReduxState {
    config: ConfigState;
    customer: CustomerState;
    catalog: CatalogState;
  }

  type AsyncAction<T = any, R = void> = (
    args?: T,
  ) => ThunkAction<Promise<R>, ReduxState, ThunksArgs, SupportedActions>;
}

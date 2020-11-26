import { combineReducers } from 'redux';
import { configReducer } from './config/reducer';
import { customerReducer } from './customer/reducer';
import { catalogReducer } from './products/reducer';

export const rootReducer = combineReducers({
  config: configReducer,
  customer: customerReducer,
  catalog: catalogReducer,
});

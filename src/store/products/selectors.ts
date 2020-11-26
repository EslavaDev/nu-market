import { compose } from 'redux';

const rootState = (state: ReduxState) => {
  return state.catalog;
};

export const getCatalogData = compose((catalogState) => {
  return catalogState.catalog;
}, rootState);
export const getMapCatalogData = compose((catalogState) => {
  return catalogState.mapCatalog;
}, rootState);

export const getLoaderCatalog = compose((catalogState) => {
  return catalogState.loading;
}, rootState);

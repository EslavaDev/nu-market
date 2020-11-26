import { compose } from 'redux';

const rootState = (state: ReduxState) => {
  return state.config;
};

export const getConfigLoading = compose((configState) => {
  return configState.loading;
}, rootState);

export const getUrlsEnviroment = compose((configState) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { loading, ...rest } = configState;
  return { ...rest };
}, rootState);

export const getEnviromentUrl = compose((configState) => {
  if (configState.enviromentUrl) {
    return configState.enviromentUrl;
  }
  return '';
}, rootState);

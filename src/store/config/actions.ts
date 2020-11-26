import remoteConfig from '@react-native-firebase/remote-config';

export const fetchConfig: AsyncAction = () => {
  return async (dispatch, _, { buildServices }) => {
    dispatch({
      type: '@@CONFIG/LOAD',
    });
    try {
      await remoteConfig().setConfigSettings({
        /**
         * minimumFetchInterval should have a value of 720
         * since firebase remote config allow only 5 fetch every hour
         * otherwise firebase start reject request if the limit are surpassed
         */
        minimumFetchIntervalMillis: 720,
      });

      await remoteConfig()
        .fetchAndActivate()
        .catch(() => {
          /**
           * this catch function should remain empty since
           * prevent to break all the execution of the config
           * due to issues with remote config library
           *
           * for more information checkout the issue in github
           * https://github.com/invertase/react-native-firebase/issues/2767
           */
        });

      const configValues = remoteConfig().getAll();

      const values: Record<string, string> = {};
      Object.entries(configValues).forEach(($) => {
        const [key, entry] = $;
        try {
          values[key] = entry.asString();
        } catch (error) {
          values[key] = entry.asString();
        }
      });
      console.log(values);

      buildServices({ apiUrl: values.enviromentUrl, token: values.token });

      dispatch({
        type: '@@CONFIG/LOAD_DONE',
        payload: values,
      });
    } catch (error) {
      dispatch({
        type: '@@CONFIG/LOAD_FAILED',
      });
    }
  };
};

export const refreshConfig: AsyncAction = () => {
  return async (dispatch, _, { buildServices }) => {
    try {
      await remoteConfig()
        .fetch()
        .catch(() => {
          /**
           * this catch function should remain empty since
           * prevent to break all the execution of the config
           * due to issues with remote config library
           *
           * for more information checkout the issue in github
           * https://github.com/invertase/react-native-firebase/issues/2767
           */
        });

      const configValues = remoteConfig().getAll();

      const values: Record<string, string> = {};
      Object.entries(configValues).forEach(($) => {
        const [key, entry] = $;
        try {
          values[key] = entry.asString();
        } catch (error) {
          values[key] = entry.asString();
        }
      });
      buildServices({ apiUrl: values.enviromentUrl, token: values.token });
      dispatch({
        type: '@@CONFIG/LOAD_DONE',
        payload: values,
      });
    } catch (error) {
      dispatch({
        type: '@@CONFIG/LOAD_FAILED',
      });
    }
  };
};

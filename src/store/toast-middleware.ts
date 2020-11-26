import { Middleware } from 'redux';
import Toast from 'react-native-tiny-toast';

export const toastMiddleware: Middleware = () => (next) => (action) => {
  if (action.type && action.type.endsWith('FAILED')) {
    const message = action.error;
    let config = {
      position: Toast.position.BOTTOM,
      containerStyle: {
        backgroundColor: 'red',
        padding: 15,
      },
      mask: true,
    };
    if (action.toast) {
      config = {
        ...config,
        ...action.toast,
      };
    }
    Toast.show(message, config);
  }
  const result = next(action);
  return result;
};

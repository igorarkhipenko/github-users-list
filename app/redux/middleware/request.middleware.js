import { StatusBar } from 'react-native';
import { Toast } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default function request(client) {
  return ({ dispatch, getState }) => {
    return next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState);
      }

      const { promise, types, ...rest } = action;

      if (!promise) {
        return next(action);
      }

      const [REQUEST, SUCCESS, FAILURE] = types;

      next({ ...rest, type: REQUEST });

      return promise(client)
        .then(result => {

          return next({ ...rest, result, type: SUCCESS });
        })
        .catch(({ message, res }) => {
          next({ ...rest, error: { message }, type: FAILURE });

          throw new Error(message);
        });
    };
  };
}

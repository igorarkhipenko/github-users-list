import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import requestMiddleware from './middleware/request.middleware';
import reducer from './modules/reducer.module';

export default api => {
  let middleware = [requestMiddleware(api)];
  let enhancers = [];

  if (__DEV__) {
    middleware.push(createLogger());
  }

  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(reducer(), undefined, compose(...enhancers));

  return store;
};

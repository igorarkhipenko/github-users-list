import superagent from 'superagent';
import humps from 'humps';

/**
 * Http requests
 */
export default class Api {
  constructor() {
    ['get', 'post', 'put', 'patch', 'del'].forEach(method => {
      this[method] = (path, options) => {
        return new Promise((resolve, reject) => {
          let request = superagent[method](path);

          if (options && options.params) {
            request.query(options.params);
          }

          if (options && options.data) {
            request.send(humps.decamelizeKeys(options.data));
          }

          request.end((err, res) => {
            if (err) {
              reject({ message: (res && res.body) || err.message, res });
            } else {
              resolve(humps.camelizeKeys(res.body));
            }
          });
        });
      };
    });
  }
}

var request = require('request');
const base = 'https://www.boredapi.com/api/activity';

module.exports.random = function(options) {
  return new Promise((resolve, reject) => {
    request({
      url: base,
      qs: options
    }, function(error, res, body) {
      if (error != null) {
        reject({'error': error});
      }

      resolve(body);
    });
  });
}

module.exports.find = function(key) {
  if (key === null || key === '') {
    return {
      error: 'Key must be defined'
    }
  }
  
  return new Promise((resolve, reject) => {
    request({
      url: base,
      qs: {
        key: key
      }
    }, function(error, res, body) {
      if (error != null) {
        reject({'error': error});
      }

      resolve(body);
    });
  });
}

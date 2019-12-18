'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const sum = (acc, cur) => (acc << 8) + cur;
  return ip.split('.').map(Number).reduce(sum, 0);
};

module.exports = { ipToInt };


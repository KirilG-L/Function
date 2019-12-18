'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const shiftIp = ip.split('.').map(Number);
  for (let i = 0, j = 3; j >= 0; i++, j--) {
    shiftIp[i] <<= 8 * j;
  }
  const sumIp = shiftIp.reduce((acc, cur) => acc + cur);
};

module.exports = { ipToInt };


'use strict';

const methods = iface => {
  const names = [];
  for (const key in iface) {
    const fn = iface[key];
    if (typeof fn === 'function') {
      names.push([key, fn.length]);
    }
  }
  return names;
};

module.exports = { methods };

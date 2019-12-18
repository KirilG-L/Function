'use strict';

const generateKey = (length, possible) => {
  let Str = '';
  const range = possible.length;
  for (let i = 1; i <= length; ++i) {
    const Num = Math.floor(Math.random() * range);
    Str += possible[Num];
  }
  return Str;
};
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

module.exports = { generateKey };

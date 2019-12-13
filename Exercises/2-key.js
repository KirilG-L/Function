'use strict';

const generateKey = (length, possible) => {
  let randomString = '';
  const range = possible.length;
  for (let i = 1; i <= length; ++i) {
    const possibleNumber = Math.floor(Math.random() * range);
    randomString += possible[possibleNumber];
  }
  return randomString;
};
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
generateKey(10, characters);
module.exports = { generateKey };

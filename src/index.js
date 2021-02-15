import uniqueRandomArray from 'unique-random-array';
import courseNames from './courses-names.json';

const getRandomItem = uniqueRandomArray(courseNames);

module.exports = {
  all: courseNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    const randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}

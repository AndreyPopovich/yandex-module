var Generator = require('./generator');

/**
 * Сортирует массив строк по частоте использования
 * @param {Array} data - массив строк
 * @returns {Array} - массив уникальных отсортированных строк
 */
var sortByFrequency = function(data) {
  var repeats = {};

  data.forEach(function(item) {
    if (repeats[item]) {
      repeats[item]++;
    } else {
      repeats[item] = 1;
    }
  });

  return Object.keys(repeats).sort(function(a, b) {
    return repeats[b] - repeats[a];
  });
};

/**
 * @param {Array} data – массив CSS классов
 */
module.exports = function(data) {
  var result = {};
  var generator = new Generator();

  sortByFrequency(data).forEach(function(item) {
    result[item] = generator.generate();
  });

  return result;
};
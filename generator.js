// строка символов, которые могут использоваться
// в качестве первого символа имени класса
var PRIMARY_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

// другие сиволы, которые могут использоваться
// в качестве второго и последующих символов
var CHARS = '-_0123456789' + PRIMARY_CHARS;

 /**
 * Генератор уникальных строк минимальной длины
 * @class
 */
function Generator() {
  // массив с уже использоваными именами классов
  this.cache = [];
}

/**
 * Генерирует уникальную строку
 * @returns {String} string - уникальная строка
 */
Generator.prototype.generate = function() {
  var generated;

  do {
    generated = this._randomString(this._stringLength());
  } while (this.cache.indexOf(generated) !== -1); // генерируем новое имя пока оно не окажется уникальным

  this.cache.push(generated);
  return generated;
};

/**
 * Вычисляет длину строки для герерации
 * @returns {number} - длина строки
 * @private
 */
Generator.prototype._stringLength = function() {
  var cacheSize = this.cache.length,
    primaryCharsCount = PRIMARY_CHARS.length,
    charsCount = CHARS.length;

  if (cacheSize < primaryCharsCount) {
    return 1;
  } else {
    // вычисляем количество уже сгенерированных имен, длина которых больше 1 символа
    // затем вычисляем логарифм количества уже сгенерированных имен
    // по основанию количества символов, которые можем испрользовать в качестве имени класса
    return Math.round(Math.log(cacheSize - primaryCharsCount + charsCount) / Math.log(charsCount)) + 1;
  }
};

/**
 * Генерирует случайную строку заданной длины
 * @param {number} length - длина строки
 * @returns {string} - случайная строка
 * @private
 */
Generator.prototype._randomString = function(length) {
  var string = '',
    primaryCharsCount = PRIMARY_CHARS.length,
    charsCount = CHARS.length;

  for (var i = 1; i <= length; i++) {
    string += (i === 1) ? PRIMARY_CHARS[Math.floor(Math.random() * primaryCharsCount)] :
      CHARS[Math.floor(Math.random() * charsCount)];
  }

  return string;
};

module.exports = Generator;
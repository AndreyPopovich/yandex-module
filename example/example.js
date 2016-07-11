var fn = require('../'),
    data = require('./input.json'),
    fs = require('fs');

fs.writeFile('./output.json', JSON.stringify(fn(data), null, 4), function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log('Обфускация завершена.');
  }
});
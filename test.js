let bored = require('./index.js');

bored.random({
  type: 'education',
  minprice: '.1'
}).then(res => {
  console.log(res);
});

bored.find('3136036').then(res => {
  console.log(res);
});

# Bored API Wrapper

Wrapper for the [Bored API](https://www.boredapi.com/)

## Install

```bash
$ npm install bored
```

## Usage

```js
const bored = require('bored');

bored.random().then(res => {
  console.log(res);
});

bored.find('3136036').then(res => {
  console.log(res);
});
```


## Functions

### random

Find a random activity with specified parameters

```js
let bored = require('bored');

// You can use some or all of these fiends
let options = {
  type: , // ['education', 'recreational', 'social', 'diy', 'charity', 'cooking', 'relaxation', 'music', 'busywork']
  participants: , // [1, ...]
  price: , // [0.0, 1.0]
  minprice: , // [0.0, 1.0]
  maxprice: , // [0.0, 1.0]
  accessibility: , // [0.0, 1.0]
  minaccessibility: , // [0.0, 1.0]
  maxaccessibility: // [0.0, 1.0]
}

bored.random(options).then(res => {
  console.log(res);
});
```

### find

Find a specific activity by its key

```js
let bored = require('bored');

bored.find('9414706').then(res => {
  console.log(res);
});
```

## Examples

See [test.js](https://github.com/drewthoennes/Bored-API-Wrapper/blob/master/test.js) for examples

## License

[MIT](https://github.com/drewthoennes/Bored-API-Wrapper/blob/master/license)

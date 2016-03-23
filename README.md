# 1d-range-query

[![Build Status](https://travis-ci.org/SummerWish/1d-range-query.svg?branch=master)](https://travis-ci.org/SummerWish/1d-range-query)
[![Coverage Status](https://coveralls.io/repos/github/SummerWish/1d-range-query/badge.svg?branch=master)](https://coveralls.io/github/SummerWish/1d-range-query?branch=master)
[![Dependency Status](https://david-dm.org/SummerWish/1d-range-query.svg)](https://david-dm.org/SummerWish/1d-range-query)
[![npm version](http://img.shields.io/npm/v/1d-range-query.svg?style=flat)](https://npmjs.org/package/1d-range-query "View this project on npm")
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Efficient range maximum/minimum query.

```bash
npm install 1d-range-query
```

## Usage

```js
import rangeQuery from '1d-range-query';
const query = rangeQuery([1,5,10,2,5,3]);
console.log(query.max(0, 2)); // => 10 (10 is the max in [1,5,10])
console.log(query.min(2, 4)); // => 2 (2 is the min in [10,2,5])
```

### \#query.max(from, to)

Query the maximum value in range `[from, to]`.

### \#query.min(from, to)

Query the minimum value in range `[from, to]`.

## Complexity

### Time

Initialize: O(nlogn)

Query: O(1)

### Space

O(nlogn)

## License

MIT
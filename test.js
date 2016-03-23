var rangeQuery = require('./index.js');
var assert = require('assert');

describe('1d-range-query', function () {

  it('should works for 0 <= FROM <= TO < N', function () {

    [1, 2, 3, 5, 10, 127, 128, 129, 200].forEach(function (arraySize) {

      var i, j, max_value, min_value;

      // build testing data
      var arr = [];
      for (i = 0; i < arraySize; ++i) {
        arr.push(Math.floor(Math.random() * 4000) - 2000);
      }

      var query = rangeQuery(arr);

      // test every range
      for (i = 0; i < arr.length; ++i) {
        max_value = Number.MIN_SAFE_INTEGER;
        min_value = Number.MAX_SAFE_INTEGER;
        for (j = i; j < arr.length; ++j) {
          if (arr[j] > max_value) {
            max_value = arr[j];
          }
          if (arr[j] < min_value) {
            min_value = arr[j];
          }
          assert.equal(query.max(i, j), max_value);
          assert.equal(query.min(i, j), min_value);
        }
      }

    });

  });

});

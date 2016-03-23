module.exports = function rangeQueryFactory(arr) {

  var n = arr.length, m = Math.floor(Math.log2(n)) + 1;
  var fmax = new Array(n * m);
  var fmin = new Array(n * m);

  function getIndex(d1, d2) {
    return d1 * n + d2;
  }

  // build ST
  var i, j, i_max, j_max, idx, idx2, idx3;
  for (i = 0; i < n; ++i) {
    idx = getIndex(i, 0);
    fmax[idx] = arr[i];
    fmin[idx] = arr[i];
  }
  for (j = 1; j < m; ++j) {
    for (i = 0, i_max = n + 1 - (1 << j); i < i_max; ++i) {
      idx = getIndex(i, j);
      idx2 = getIndex(i, j - 1);
      idx3 = getIndex(i + (1 << (j - 1)), j - 1);
      fmin[idx] = Math.min(fmin[idx2], fmin[idx3]);
      fmax[idx] = Math.max(fmax[idx2], fmax[idx3]);
    }
  }

  return {
    max: function (idxBegin, idxEnd) {
      var k = Math.floor(Math.log2(idxEnd - idxBegin + 1));
      return Math.max(fmax[getIndex(idxBegin, k)], fmax[getIndex(idxEnd + 1 - (1 << k), k)]);
    },
    min: function (idxBegin, idxEnd) {
      var k = Math.floor(Math.log2(idxEnd - idxBegin + 1));
      return Math.min(fmin[getIndex(idxBegin, k)], fmin[getIndex(idxEnd + 1 - (1 << k), k)]);
    },
  };

};

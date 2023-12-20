const pl = require('nodejs-polars');

const fooSeries = pl.Series("foo", [1, 2, 3]);
console.log(fooSeries.toArray());
console.log(fooSeries.sum());
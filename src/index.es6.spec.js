/* eslint-disable prefer-arrow-callback, func-names */
// why disable prefer-arrow-callback and func-names? Mocha does not recommend arrow callbacks.

const assert = require('power-assert');
const exifDate = require('../dist/index');

describe('toISO()', function () {
  it('is valid ISO date for default timezone', function () {
    const DateTimeOriginal = '2015:03:17 19:39:10';
    assert(exifDate.toISO(DateTimeOriginal) === '2015-03-18T02:39:10.000Z');
  });

  it('is valid ISO date for America/Los_Angeles timezone', function () {
    const DateTimeOriginal = '2015:03:17 19:39:10';
    assert(exifDate.toISO(DateTimeOriginal, 'America/Los_Angeles') === '2015-03-18T02:39:10.000Z');
  });

  it('is null if passed a bad date', function () {
    const DateTimeOriginal = 'XXXX';
    assert(exifDate.toISO(DateTimeOriginal) === null);
  });

  it('is null if missing date', function () {
    const DateTimeOriginal = undefined;
    assert(exifDate.toISO(DateTimeOriginal) === null);
  });
});

var nx = require('next-js-core2');
require('../src/next-deep-eq-date');


test('nx.deepEqDate', function () {
  var obj1 = {name: 'fei'};
  var obj2 = {email: '1290657123@qq.com'};

  var result = {};

  nx.deepEqDate(result, obj1, obj2);

  expect(result.name, obj1.name).toBe(null);
});


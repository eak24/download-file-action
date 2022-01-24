const download = require('../src/download-mod');

test('Should add token', () => {
  return download('http://httpbin.org/get', '.', {
    filename: 'test-result.json',
    query: {
      token: 'test_this_token',
    },
  });
});

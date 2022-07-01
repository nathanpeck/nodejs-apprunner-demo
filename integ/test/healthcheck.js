import superagent from 'superagent';
import assert from 'assert';

const APP_URL = process.env.APP_URL;

describe('Web server', function () {
  describe('Health check', function () {
    var healthcheck;

    // Fetch the healthcheck before the test
    before(function (done) {
      superagent.get(`${APP_URL}/`).then(function (resp) {
        healthcheck = resp;
        done();
      });
    });

    // Ensure an expectation about the healthcheck
    it('should return 200 OK', function () {
      assert.equal(healthcheck.statusCode, 200);
    });
  });
});

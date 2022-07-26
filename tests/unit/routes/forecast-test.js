import { module, test } from 'qunit';
import { setupTest } from 'pop-pays/tests/helpers';

module('Unit | Route | forecast', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:forecast');
    assert.ok(route);
  });
});

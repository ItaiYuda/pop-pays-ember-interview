import { module, test } from 'qunit';
import { setupTest } from 'pop-pays/tests/helpers';

module('Unit | Adapter | forecast', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:forecast');
    assert.ok(adapter);
  });
});

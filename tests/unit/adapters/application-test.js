import { module, test } from 'qunit';
import { setupTest } from 'pop-pays-ember-interview/tests/helpers';

module('Unit | Adapter | application', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:application');
    assert.ok(adapter);
  });
});

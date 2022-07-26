import { module, test } from 'qunit';
import { setupTest } from 'pop-pays/tests/helpers';

module('Unit | Model | forecast', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('forecast', {});
    assert.ok(model);
  });
});

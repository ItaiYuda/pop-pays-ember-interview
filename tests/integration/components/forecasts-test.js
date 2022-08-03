import { module, test } from 'qunit';
import { setupRenderingTest } from 'pop-pays-ember-interview/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | forecasts', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Forecasts />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Forecasts>
        template block text
      </Forecasts>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});

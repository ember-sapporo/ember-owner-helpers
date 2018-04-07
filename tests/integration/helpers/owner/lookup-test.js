import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | owner/lookup', function(hooks) {
  setupRenderingTest(hooks);

  test('it works', async function(assert) {
    this.owner.register('foo:bar', 42, {instantiate: false});

    await render(hbs`{{owner/lookup 'foo:bar'}}`);

    assert.equal(this.element.textContent.trim(), '42');
  });
});

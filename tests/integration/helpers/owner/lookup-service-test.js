import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

module('Integration | Helper | owner/lookup-service', function(hooks) {
  setupRenderingTest(hooks);

  test('it works', async function(assert) {
    this.owner.register('service:life', Service.extend({
      answer: 42
    }));

    await render(hbs`{{get (owner/lookup-service 'life') 'answer'}}`);

    assert.equal(this.element.textContent.trim(), '42');
  });
});

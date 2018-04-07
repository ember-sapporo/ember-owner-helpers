import Helper from '@ember/component/helper';
import { getOwner } from '@ember/application';

export default Helper.extend({
  compute([...args]) {
    return getOwner(this).lookup(...args);
  }
});

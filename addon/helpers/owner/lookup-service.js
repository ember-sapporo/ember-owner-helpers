import Helper from '@ember/component/helper';
import { getOwner } from '@ember/application';

export default Helper.extend({
  compute([serviceName, ...args]) {
    return getOwner(this).lookup(`service:${serviceName}`, ...args);
  }
});

import { Serializer } from 'ember-pouch';

export default Serializer.extend({
  modelNameFromPayloadKey: function(root) {
    if (/ties$/i.test(root)) {
      return root.substr(0, root.length - 1);
    }
    return this._super(root);
  }
});

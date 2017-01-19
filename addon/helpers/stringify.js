import Ember from 'ember';

var stringify = function (params) {
  var value = params[0];
  var show = !Ember.isNone(value) || (value === null);
  if (show) {
    return JSON.stringify(value);
  }
};

export { stringify };
export default Ember.Helper.helper(stringify);

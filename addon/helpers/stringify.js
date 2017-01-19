import Ember from 'ember';

var stringify = function (params) {
  var value = params[0];
  var show = !Ember.isNone(value) || (value === null);
  if (show) {
    return JSON.stringify(value);
  }
};

StringifyHelper = Ember.Helper.helper(stringify);

export { stringify };
export default StringifyHelper;

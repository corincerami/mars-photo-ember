import Ember from "ember";

export default Ember.Controller.extend({
  queryParams: ['sol', 'earth_date', 'camera'],
  sol: null,
  earth_date: null,
  camera: null
});

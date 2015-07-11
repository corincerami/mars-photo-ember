import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'rover',

  model: function() {
    return this.store.find('rover');
  },

  setupController: function(controller, model) {
    controller.set('model', model);
  }
});

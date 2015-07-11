import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('/api/v1/rovers/' + params.rover_name);
  },

  serialize: function(model) {
    return { rover_name: model.get('name') };
  },

  setupController: function(controller, model) {
    controller.set('model', model.rover);
  }
});

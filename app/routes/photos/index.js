import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('/rovers/' + params.rover_name + '/photos');
  },

  setupController: function(controller, model) {
    controller.set('model', model);
  }
});

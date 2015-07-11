import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = '/api/v1/rovers/' + params.rover_name;
    if (params.sol) {
      url += '/photos?sol=' + params.sol;
    } else if (params.earth_date) {
      url += '/photos?earth_date=' + params.earth_date;
    }
    if (params.camera) {
      url += '&camera=' + params.camera;
    }
    return Ember.$.getJSON(url);
  },

  serialize: function(model) {
    return { rover_name: model.get('name') };
  },

  setupController: function(controller, model) {
    if (model.rover) {
      controller.set('rover', model.rover);
    } else {
      controller.set('rover', model.photos[0].rover);
      controller.set('photos', model.photos);
    }
  }
});

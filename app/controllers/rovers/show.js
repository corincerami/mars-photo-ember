import Ember from "ember";

export default Ember.Controller.extend({
  queryParams: ['sol', 'earth_date', 'camera'],
  sol: null,
  earth_date: null,
  camera: null,

  actions: {
    photoQuery: function() {
      var _this = this;
      var sol = this.get('sol');
      var camera = this.get('camera');
      var url = '/api/v1/rovers/' + this.rover.name;
      url += '/photos?sol=' + sol;
      url += '&camera=' + camera;
      Ember.$.getJSON(url, function(response) {
        _this.set('photos', response.photos);
      });
    }
  }
});

import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('rovers', { path: "/" }, function() {
    this.route('show', { path: '/:rover_name' }, function() {
    });
  });
  this.resource('photos', function() {
    this.route('show');
  });
});

export default Router;

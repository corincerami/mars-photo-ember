import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: 'https://mars-photos.herokuapp.com/',
  namespace: 'api/v1'
});

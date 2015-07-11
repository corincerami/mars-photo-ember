import DS from 'ember-data';

export default DS.Model.extend({
  img_src: DS.attr('string'),
  sol: DS.attr('number'),
  earth_date: DS.attr('date'),
  rover: DS.belongsTo('rover', { async: true })
});

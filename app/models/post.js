import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default DS.Model.extend({
  name: DS.attr('string'),
  author: DS.attr('string'),
  content: DS.attr('string')

});

import Ember from 'ember';

const { Route} = Ember;

export default Route.extend({
  model() {
    return this.store.createRecord('post',{
      title: 'Ember Blog Post',
      author: 'this girl',
      content: 'Default'
    });
  }
});

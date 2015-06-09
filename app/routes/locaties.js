import Ember from "ember";

export default Ember.Route.extend({
	model: function() {
		return this.get('store').find('locaty');
	},
	
  actions: {
	  edit: function() {
			this.controllerFor('locaty').set('isEditing', true);
		},

		doneEditing: function() {
			this.controllerFor('locaty').set('isEditing', false);
			this.modelFor('locaty').save();
		},
		
		deleteLocatie: function() {
      this.modelFor('locaty').destroyRecord().then(function() {
        this.transitionTo('locaties');
      }.bind(this));
    },

    createLocatie: function() {
      this.send('edit');
      var newLocatie = this.get('store').createRecord('locaty');
      newLocatie.set('datum' , new Date());
      this.transitionTo('locaty', newLocatie.save());
    }
  }
  
});

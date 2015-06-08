import Ember from "ember";

export default Ember.Route.extend({
	model: function() {
		return this.get('store').find('locatie');
	},
	
  actions: {
	  edit: function() {
			this.controllerFor('locatie').set('isEditing', true);
		},

		doneEditing: function() {
			this.controllerFor('locatie').set('isEditing', false);
			this.modelFor('locatie').save();
		},
		
		deleteLocatie: function() {
      this.modelFor('locatie').destroyRecord().then(function() {
        this.transitionTo('locaties');
      }.bind(this));
    },

    createLocatie: function() {
      this.send('edit');
      var newLocatie = this.get('store').createRecord('locatie');
      newLocatie.set('datum' , new Date());
      this.transitionTo('locatie', newLocatie.save());
    }
  }
  
});

import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('locaties', function() {
		this.resource('locaty', { path: ':locaty_id' });
	});
});

export default Router;

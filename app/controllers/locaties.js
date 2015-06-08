import Ember from "ember";

export default Ember.ArrayController.extend({
  sortProperties: ['naam'],
  sortAscending: true,
  
  queryParams: ["query"],
  
  filteredContent: function() {
    if (this.get('query')) {
      return this.get('arrangedContent').filter(function(item) {
        var query = this.get('query').toLowerCase(),
            naam = (item.get('naam') || '').toLowerCase(),
            opmerkingen = (item.get('opmerkingen') || '').toLowerCase();
        return naam.match(query) || opmerkingen.match(query);
      }.bind(this));
    }
    return this.get('arrangedContent');
  }.property('arrangedContent', 'query')
});
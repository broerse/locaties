import DS from "ember-data";
import { Model } from 'ember-pouch';

var Locatie = Model.extend({
	datum: DS.attr('date'),
	naam: DS.attr('string', {defaultValue: ""}),
	opmerkingen: DS.attr('string', {defaultValue: ""})
});

export default Locatie;
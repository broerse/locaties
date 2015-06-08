import config from '../config/environment';
import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';

var db = new PouchDB(config.local_couch);
var remote = new PouchDB(config.remote_couch, {ajax: {timeout: 20000}});

db.sync(remote, {live: true, retry: true});

export default Adapter.extend({
  db: db
});

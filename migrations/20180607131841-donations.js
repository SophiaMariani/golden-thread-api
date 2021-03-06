'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
},

  exports.up = function(db, callback) {
    db.createTable('donations', {
      donations_id: {
        type: 'int',
        primaryKey: true
      },
      charity_id: {
        type: 'int',
        length: 40
      },
      user_id: {
        type: 'int',
        length: 40
      },
      amount_donated: {
        type: 'string',
        length: 50
      },
     address_id: {
      type: 'int',
      length: 50
    },
    }, function(err) {
      if (err) return callback(err);
      return callback();
    });
  };
  exports.down = function(db, callback) {
    db.dropTable('donations', callback);
  };
  

exports._meta = {
  "version": 1
};

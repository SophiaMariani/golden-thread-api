'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
},
  exports.up = function (db, callback) {
    db.createTable('payment_method', {
      payment_method_id: {
        type: 'int',
        primaryKey: true
      },
      user_id: {
        type: 'int',
        length: 50
      },
      bank_id: {
        type: 'int',
        length: 50
      },
      card_name: {
        type: 'string',
        length: 40
      },
      card_number: {
        type: 'string',
        length: 40
      },
      expire: {
        type: 'string',
        length: 40
      },
      company: {
        type: 'string',
        length: 40
      }
    }, function (err) {
      if (err) return callback(err);
      return callback();
    });
  };
exports.down = function (db, callback) {
  db.dropTable('payment_method', callback);
};


exports._meta = {
  "version": 1
};

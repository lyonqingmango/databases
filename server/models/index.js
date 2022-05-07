var db = require('../db');

//db.dbConnection.connect();

module.exports = {
  messages: {
    // get: function () {}, // a function which produces all the messages
    // post: function () {} // a function which can be used to insert a message into the database

    get: function(callback) {
      //db.connect (function(err) {
      // if (err) {
      //   throw err;
      // }
      console.log('Connected to messages get!');
      var sql = 'Select * from messages';


      db.query(sql, function (err, result) {
        if (err) {
          throw err;
        }
        console.log('result' + result);
        callback(null, result);
      });
      //});
    },

    post: function (data, callback) {
      //db.connect (function(err) {
      // if (err) {
      //   console.log('messages.post err' + err);
      //   throw err;
      // }
      console.log('Connected to messages post!');

      // json: {
      //   username: 'Valjean',
      //   message: 'In mercy\'s name, three days is all I need.',
      //   roomname: 'Hello'
      // }

      var sql = `insert into messages (user_id, text_message, roomname) values ((select users.id from users where users.username = "${data.username}"), "${data.message}", "${data.roomname}")`;
      db.query(sql, function (err, result) {
        if (err) {
          throw err;
        }
        console.log('messages post Result: ' + JSON.stringify(result));
        callback(null, result);
      });
      //});
    },

    //INSERT INTO table_name (column1, column2, column3, ...)
    // VALUES (value1, value2, value3, ...)

  },

  users: {
    // Ditto as above.
    // get: function () {},
    // post: function () {}
    get: function(callback) {
      //db.connect (function(err) {
      if (err) {
        throw err;
      }
      console.log('Connected to users get!');
      var sql = 'Select * from users';
      db.query(sql, function (err, result) {
        console.log('Result: ' + result);
        callback(null, result);
      });
      //});
    },
    post: function (data, callback) {
      console.log('connect, this is data', data);
      //db.connect (function(err) {
      console.log('Connected to users post!');

      // INSERT INTO customer_details (customer_name,customer_address)
      // SELECT * FROM (SELECT 'Veronica' AS customer_name, '552 NewYork USA' AS customer_address) AS temp
      // WHERE NOT EXISTS (
      //     SELECT customer_name FROM customer_details WHERE customer_name = 'Veronica'
      // ) LIMIT 1;

      // INSERT INTO your_table_name (column1, column2, ....)
      // SELECT * FROM (SELECT value1, value2,....) AS temp
      // WHERE NOT EXISTS (<conditional_subquery>);
      // ''insert into users (username) '
      // //           + `select * from (select ${data.username}) as tmp `
      // //           + `where not exists (select username from users where username = ${data.username}`;'

      //var sql = `insert ignore into users (username) values ("${data.username}")`;
      var sql = 'insert into users (username) '
                + `select * from (select "${data.username}" as username) as temp `
                + `where not exists (select username from users where username = "${data.username}") LIMIT 1`;

      db.query(sql, function (err, result) {
        if (err) {

          throw err;
        }

        console.log('user post result ' + JSON.stringify(result));
        callback(null, result);
      });
      //});
    },
  }


};


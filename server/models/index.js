var db = require('../db');


module.exports = {
  messages: {
    get: function(callback) {
      console.log('Connected to messages get!');
      var sql = 'select messages.id, messages.text, messages.roomname, users.username from messages, users where messages.userid = users.id';
      db.query(sql, function (err, result) {
        if (err) {
          throw err;
        }
        console.log('result' + result);
        callback(null, result);
      });
      // db.Message.sync()
      //   .then(function() {
      //     // Retrieve objects from the database:
      //     return db.Message.findAll();
      //   }).then(function (message) {
      //     callback(message);
      //   })
      //   .catch(function(err) {
      //     // Handle any error in the chain
      //     console.error(err);
      //     db.Message.close();
      //   });
    },

    post: function (data, callback) {
      console.log('Connected to messages post!');
      // try to add username into users table
      var sql = 'insert into users (username) '
                + `select * from (select "${data.username}" as username) as temp `
                + `where not exists (select username from users where username = "${data.username}") LIMIT 1`;

      db.query(sql, function (err, result) {
        if (err) {
          throw err;
        }
      });

      // then add message to message table
      var sql = `insert into messages (userid, text, roomname) values ((select users.id from users where users.username = "${data.username}"), "${data.text}", "${data.roomname}")`;
      db.query(sql, function (err, result) {
        if (err) {
          throw err;
        }
        console.log('messages post Result: ' + JSON.stringify(result));
        callback(null, result);
      });
      // return db.User.findOrCreate({
      //   where: { username: `${data.username}` },
      // })
      //   .then(function(result) {
      //     // Retrieve objects from the database:
      //     console.log('messagespost result' + result);
      //     return db.Message.create({userid: currentid, text: data.message, roomname: data.username});
      //   }).then(function (message) {
      //     callback(message);
      //   })
      //   .catch(function(err) {
      //     // Handle any error in the chain
      //     console.error(err);
      //     db.User.close();
      //   });
    },
  },

  users: {

    get: function(callback) {
      console.log('Connected to users get!');
      var sql = 'Select * from users';
      db.query(sql, function (err, result) {
        if (err) {
          throw err;
        }
        console.log('Result: ' + result);
        callback(null, result);
      });
      // db.User.sync()
      //   .then(function() {
      //     // Retrieve objects from the database:
      //     return db.User.findAll();
      //   }).then(function (userlist) {
      //     callback(userlist);
      //   })
      //   .catch(function(err) {
      //     // Handle any error in the chain
      //     console.error(err);
      //     db.User.close();
      //   });
    },
    post: function (data, callback) {
      console.log('Connected to users post!');
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
      // console.log('this is dbuser function');
      // db.User.sync()
      //   .then(function () {
      //     console.log('inside user sync');
      //     return db.User.findOrCreate({ where: { username: data.username}});
      //   })
      //   .then(function (userinfo) {
      //     console.log('inside the find or create');
      //     callback(userinfo);
      //   })
      //   .catch(function(err) {
      //     // Handle any error in the chain
      //     console.error(err);

      //   });
    },
  }
};
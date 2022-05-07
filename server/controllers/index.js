var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, result)=>res.send(JSON.stringify(result)));//express?? res.end???
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, (err, result)=>res.send(JSON.stringify(result)));//??JSON.stringify
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, result)=>res.send(JSON.stringify(result)));
    },
    post: function (req, res) {
      //console.log('this is req from users post', req);
      models.users.post(req.body, (err, result)=>res.send(JSON.stringify(result)));
    }
  }
};


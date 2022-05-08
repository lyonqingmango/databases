var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'chat',
});
dbConnection.connect();

module.exports = dbConnection;

// var Sequelize = require('sequelize');

// var db = new Sequelize('chat', 'root', 'password', {
//   define: {
//     timestamps: false }
// });
// //* TODO this constructor takes the database name, username, then password.
// // * Modify the arguments if you need to */

// /* first define the data structure by giving property names and datatypes
//  * See http://sequelizejs.com for other datatypes you can use besides STRING. */
// var User = db.define('user', {
//   username: Sequelize.STRING
// });

// var Message = db.define('message', {
//   userid: Sequelize.INTEGER,
//   text: Sequelize.STRING,
//   roomname: Sequelize.STRING
// });

// module.exports = {
//   User: User,
//   Message: Message
// };
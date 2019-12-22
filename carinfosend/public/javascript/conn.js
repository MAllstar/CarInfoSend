var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/new_db');
const conn = mongoose.connection
var msg = "";
conn.on('error', function (err) {
  msg = '连接数据库失败'
});
var userSchema = mongoose.Schema({
  mail: String,
  password: String
});
var users = mongoose.model("Person", userSchema);

var rsuSchema = mongoose.Schema({
  loAndLa: String,
  carNum: String,
  state: String,
  group: String
});
var rsu = mongoose.model("rsu", rsuSchema);

exports.rsu = rsu;
exports.users = users;
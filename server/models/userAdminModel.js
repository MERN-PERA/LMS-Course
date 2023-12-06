const mongoose = require("mongoose");

const UserAdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const userAdminModel = mongoose.model("userAdmin", UserAdminSchema);
module.exports = userAdminModel;
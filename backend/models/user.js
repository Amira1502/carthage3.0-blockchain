// require mongoose
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  //password: { type: String, required: true },
  Telegram: { type: String },
  id: { type: String },
});


module.exports = mongoose.model("User", userSchema);

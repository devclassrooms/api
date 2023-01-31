const mongoose = require("mongoose");
const schemna = mongoose.Schema;


//creating User schema
let userSchema = new schemna({
    name: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, require: true },
    created_at: Date
})


//model
let User = mongoose.model('User', userSchema);


module.exports = User;
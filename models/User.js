const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter your userName"]
    },
    password: {
        type: String,
        required: [true, "Please enter your password"]
    },
    salt: String,
    hash: String,
})

const User = mongoose.model('User', userSchema);

module.export = mongoose.model('User', userSchema);
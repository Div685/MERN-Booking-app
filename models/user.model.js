//import mongoose from "mongoose";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   userName: {type: String, required: true},
   password: {type: String}

}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
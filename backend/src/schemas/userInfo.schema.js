const mongoose = require('mongoose');

const preferenceSchema = new mongoose.Schema({
    gender: { type: String, enum: ['male', 'female', 'other'] },
    occupation: { type: String },
    location: { type: String },
    religion: { type: String },
    education: {type: String}
});

const userInfoSchema = new mongoose.Schema({
    userID: { type: String },
    name: {type: String, required: true},
    description: { type: String },
    age: { type: Number, min: 18 },
    location: { type: String },
    interests: [{ type: String }],
    gender: { type: String, enum: ['male', 'female', 'other'] },
    dob: { type: String },
    religion: {type: String},
    education: {type: String},
    occupation: {type:String},
    preferences: { type: preferenceSchema },
    isPremium: { type: Boolean, default: false } 
});

const UserInfo = mongoose.model('userInfo', userInfoSchema);

module.exports = {
    UserInfo
};
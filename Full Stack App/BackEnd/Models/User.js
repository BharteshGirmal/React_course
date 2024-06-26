const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true  // Adding unique index to the email field
    },
    password: {
        type: String,
        required: true,
        default: 'General'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// If you want to create a compound index or other indexes, you can define them like this:
// UserSchema.index({ email: 1 }); // Example of creating an index on the email field

const User = mongoose.model('User', UserSchema);

module.exports = User;

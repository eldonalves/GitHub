const mongoose = require('mongoose');
const multer = require ('multer');
const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    Image: String,
    likes: {
        type: Number,
        default: 0
        }
    },
    {
    timestamps: true

});

module.exports = mongoose.model('Post', PostSchema);
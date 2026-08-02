const mongoose = require('mongoose');
const urlModel = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    visitHistory: [{timestamp: {type: Number}}],
    },
    {timestamps: true}  
)

const URL = mongoose.model("URL", urlModel)
module.exports = {
    URL
}
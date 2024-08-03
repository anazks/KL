const mongoose = require("mongoose");
const newsModel = new mongoose.Schema({
    Pname: {
        type: String,
        required: true
    },
    Details: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("newsModel", newsModel);
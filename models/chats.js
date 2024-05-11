const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from : {
        type : String,
        required : true
    },
    to : {
        type : String,      //  blue-print of document
        required : true
    },
    mssege : {
        type : String,
        required : true
    },
    created_at : {
        type : Date,
        required : true
    }
})

const Chat = mongoose.model('Chat',chatSchema);     // jo hamare model ka name hogha vo hi hamra collection ka name hogha

module.exports = Chat;
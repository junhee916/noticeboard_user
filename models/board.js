const mongoose = require('mongoose')

const modelShema = mongoose.Schema(
    {   
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'user',
            required: true
        },
        board : {
            type : String,
            required : true
        }
    },
    {
        timestamps : true
    }
)

module.exports = mongoose.model('board', modelShema)
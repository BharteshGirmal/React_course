const mongoose = require('mongoose');
const {Schema} = mongoose;

const NotesSchemea = new Schema ({

    user:{
        // creating a forign key from user model
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title :{
        type:String,
        required:true
    },
    description :{
        type:String,
        required:true
    },
    tag :{
        type:String,
        required:true,
        default:'General'
    },
    date:{
        type:Date,
        default:Date.now
    }
})


module.exports= mongoose.model('notes', NotesSchemea);
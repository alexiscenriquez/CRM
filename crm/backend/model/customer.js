const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-sequence')(mongoose);

let customerSchema= new Schema({
    fName:{
        type:String,
        required:true
    },
    lName:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    dateAdded:{
        type:Date,
        default:Date.now
    }
},
    {
collection:'customers'
    }
);

customerSchema.plugin(autoIncrement, {inc_field:'cid'})
module.exports = mongoose.model('customer', customerSchema)
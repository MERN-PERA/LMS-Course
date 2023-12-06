const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paySchema = new Schema({

 _id:{
    type:Number,
    required:true
       },

paymentname:{
     type:String,
     required:true
    },
paymentfee :{
    type : String,
    required : true
},
paymentstatus :{
    type : String,
    required : true
},
paymentdate :{
    type : String,
    required : true
},


})

module.exports = mongoose.model("paymentmodel",paySchema);

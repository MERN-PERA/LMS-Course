const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studendSchema = new Schema({
id:{
        type:Number,
        required:true
    },
name :{
    type : String,
    required : true
},
address :{
    type : String,
    required : true
},
contact :{
    type : Number,
    required : true
},
nic :{
    type : String,
    required : true
},
mail :{
    type : String,
    required : true
},
username :{
    type : String,
    required : true
},
passkey :{
    type : String,
    required : true
},
course :{
    type : String,
    required : true
},
lesson:[
    {type: Number, ref: 'coursemodel'}
  ],
paymentdetails:[
    {type: Number, ref: 'paymentmodel'}
  ],


})

module.exports = mongoose.model("students",studendSchema);
// module.export = Student;
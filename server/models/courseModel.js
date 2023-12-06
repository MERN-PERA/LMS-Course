const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    _id:{
        type:Number,
        required:true
       },

courseid:{
     type:String,
     required:true
    },
coursemonth :{
    type : String,
    required : true
},
courseweek :{
    type : String,
    required : true
},
link :{
    type : String,
    required : true
},



})

module.exports = mongoose.model("coursemodel",courseSchema);
// module.export = Student;
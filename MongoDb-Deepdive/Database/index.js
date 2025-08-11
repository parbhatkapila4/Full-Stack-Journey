const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId

mongoose.connect("mongodb+srv://Parbhatkapila:%40Kapila0312@cluster-1.xps1vjs.mongodb.net/");

const AdminSchema = new Schema({
username: String,
password : String

})

const UserSchema = new Schema({
username : String,
password : String,
purchasedCourses : [{
    type: mongoose.Schema.Types.ObjectId,   
    ref: 'Course'
}]

})

const CourseSchmea = new Schema({
title: String,
description: String,
imageLink : String,
price: Number

})

const AdminModel = mongoose.model("Admin", AdminSchema);
const UserModel = mongoose.model("User", UserSchema);
const CourseModel = mongoose.model("Course", CourseSchmea);

module.exports = {
AdminModel, UserModel, CourseModel 

}
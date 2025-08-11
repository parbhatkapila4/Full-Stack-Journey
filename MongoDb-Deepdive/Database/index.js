const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId

mongoose.connect("mongodb+srv://Parbhatkapila:%40Kapila0312@cluster-1.xps1vjs.mongodb.net/");

const AdminSchema = new Schema({


})

const UserSchema = new Schema({


})

const CourseSchmea = new Schema({


})

const AdminModel = mongoose.model("Admin", AdminSchema);
const UserModel = mongoose.model("User", UserSchema);
const CourseModel = mongoose.model("Course", CourseSchmea);

module.exports = {
AdminModel, UserModel, CourseModel 

}
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;


const UserSchema = new Schema({
  email: { type: String, unique: true},
  password: String,
  FirstName: String,
  LastName: String,
});

const AdminSchema = new Schema({
  email: { type: String, unique: true}  ,
  password: String,
  FirstName: String,
  LastName: String,
});

const CourseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrL: String,
  createrId: ObjectId,
});

const PurchaseSchema = new Schema({
  courseId: ObjectId,
  userId: ObjectId,
});

const UserModel = mongoose.model("User", UserSchema);
const AdminModel = mongoose.model("Admin", AdminSchema);
const CourseModel = mongoose.model("Course", CourseSchema);
const PurchaseModel = mongoose.model("Purchase", PurchaseSchema);

module.exports = {
  UserModel,
  AdminModel,
  CourseModel,
  PurchaseModel,
};

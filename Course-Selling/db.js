const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const objectId = Schema.ObjectId;


const User = new Schema({
    email: String,
    password: String,
    name: String
});

const Admin = new Schema({
    
})

const UserModel = mongoose.model("UserModel", user);
const AdminModel = mongoose.model("AdminModel", admin);

module.exports = {
    userModel, AdminModel
}

import mongoose from "mongoose";
import { Schema } from "mongoose";
const User = new Schema({
    username: String,
    password: String,
});
export const UserModel = mongoose.model("Users", User);
//# sourceMappingURL=db.js.map
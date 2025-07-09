const Schema = mongoose.Schema;
const objectId = Schema.objectId;


const BlogType = new Schema({
    author : objectId,
    date : Date,
    username : String,
    age: Number
})
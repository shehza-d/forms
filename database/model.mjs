import mongoose from "mongoose";

export const userModel = mongoose.model(
  "UsersSchema",
  new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, min: 17, max: 65, default: 18 },
    // isMarried: { type: Boolean, default: false },
    createdOn: { type: Date, default: Date.now },
  })
);

// const ConnectMongoDB = (url) => {
//   return mongoose.connect(url)
// }
// module.exports = ConnectMongoDB

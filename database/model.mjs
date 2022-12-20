import mongoose from "mongoose";

export const userModel = mongoose.model(
  "Users",
  new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    websiteURL: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number, min: 17, max: 65, default: 18,required: true },
    userPhoneNumber: { type: String, required: true },
    isStudent: { type: Boolean, default: false },
    createdOn: { type: Date, default: Date.now },
  })
);

// const ConnectMongoDB = (url) => {
//   return mongoose.connect(url)
// }
// module.exports = ConnectMongoDB

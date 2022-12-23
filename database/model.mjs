import mongoose from "mongoose";

//user schema should be private for security reasons 
export const userModel = mongoose.model(
  "Users",
  new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    websiteURL: { type: String, required: false },
    email: { type: String, required: true },
    password: { type: String, required: true },//password is mostly saved with other name then password for security (like pw:type: String)
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

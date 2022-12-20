import { userModel } from "../database/model.mjs";
// import { stringToHash, varifyHash } from "bcrypt-inzi";

const getAllUsersFun = async (req, res) => {
  userModel.find({}, (err, data) => {
    if (!err) {
      res.send({
        message: "here is you product list",
        data: data,
      });
    } else {
      res.status(500).send({
        message: "server error",
      });
    }
  });
};
const getUser = async (req, res) => {
  console.log("this is user id", req.params.id);
  userModel.findOne({}, (err, data) => {
    if (!err) {
      res.send({
        message: "here is you product list",
        data: data,
      });
    } else {
      res.status(500).send({
        message: "server error",
      });
    }
  });
};
// const searchDataFun = async (req, res) => {
//   // userModel.findOne({ _id: id }, (err, data) => {
//     // userModel.find({ $text: { $search: "laptop" } }, (err, data) => {
//       userModel.find({ productName: req.params.searchTerm  }, (err, data) => {
//     if (!err) {
//       if (data) {
//         res.send({
//           message: "data mil gya",
//           data: data,
//         });
//       } else {
//         res.send({ message: "data nhi mila" });
//       }
//     } else {
//       console.log(err);
//     }
//   });
// };
export { getAllUsersFun, getUser };

import { userModel } from "../database/model.mjs";
import { stringToHash, varifyHash } from "bcrypt-inzi";

const createUserFun = async (req, res) => {
  let body = req.body;
  console.log(body);

  // null check - undefined, "", 0 , false, null , NaN
  if (
    !body.age ||
    !body.address ||
    !body.name ||
    !body.userPhoneNumber ||
    !body.email ||
    !body.password
  ) {
    res.status(400).send(`required fields missing,`);
    return;
  } else {
    // check if user already exist // query email user
    userModel.findOne({ email: body.email }, async (err, data) => {
      if (!err) {
        console.log("data: ", data);

        // user already exist
        if (data) {
          console.log("user already exist: ", data);
          res.status(400);
          res.send({
            message: "user already exist, please try a different email",
          });
          return;
        } else {
          // user not already exist

          const hashString = await stringToHash(body.password);
          // .then((hashString) => {
          userModel.create(
            {
              name: body.name,
              age: body.age,
              email: body.email.toLowerCase(),
              password: hashString,
              websiteURL: body.websiteURL,
              address: body.address,
              userPhoneNumber: body.userPhoneNumber,
            },
            (err, result) => {
              if (!err) {
                console.log("data saved: ", result);
                res.status(201).send({ message: "user is created" });
              } else {
                console.log("db error: ", err);
                res.status(500).send({ message: "internal server error" });
              }
            }
          );
          // });
        }
      } else {
        console.log("db error: ", err);
        res.status(500).send({ message: "db error in query" });
        return;
      }
    });
  }
};
const loginFun = async (req, res) => {
  let body = req.body;
  console.log(body);

  // null check - undefined, "", 0 , false, null , NaN
  if (
    !body.age ||
    !body.address ||
    !body.name ||
    !body.userPhoneNumber ||
    !body.email ||
    !body.password
  ) {
    res.status(400).send(`required fields missing,`);
    return;
  }

  // check if user already exist // query email user
  userModel.findOne(
    { email: body.email },
    // { email:1, firstName:1, lastName:1, age:1, password:0 },
    "email firstName lastName age password",
    async (err, data) => {
      if (!err) {
        console.log("data: ", data);

        if (data) {
          // user found
          const isMatched = await varifyHash(body.password, data.password);
          //   .then((isMatched) => {
          console.log("isMatched: ", isMatched);

          if (isMatched) {
            var token = jwt.sign(
              {
                _id: data._id,
                email: data.email,
                iat: Math.floor(Date.now() / 1000) - 30,
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
              },
              SECRET
            );

            console.log("token: ", token);

            res.cookie("Token", token, {
              maxAge: 86_400_000,
              httpOnly: true,
            });

            res.send({
              message: "login successful",
              profile: {
                email: data.email,
                firstName: data.firstName,
                lastName: data.lastName,
                age: data.age,
                _id: data._id,
              },
            });
            return;
          } else {
            console.log("user not found");
            res.status(401).send({ message: "Incorrect email or password" });
            return;
          }
          // });
        } else {
          // user not already exist
          console.log("user not found");
          res.status(401).send({ message: "Incorrect email or password" });
          return;
        }
      } else {
        console.log("db error: ", err);
        res.status(500).send({ message: "login failed, please try later" });
        return;
      }
    }
  );
};
// const postDataFun = async (req, res) => {
//     const body = req.body;
//     // const img:any = req.files[0] ;

//     // console.log("body: ", req);
//     // console.log("file: ", req.files[0]);
//     //(req.files[0].size) isper check lage ga for limit of MB
//     if (!body.productName || !body.productDescription || !body.productPrice) {
//       res.status(400).send(`Required fields missing`); //.statusMessage ="Image not found !";
//       return;
//     }

//     // if (req.files[0]) {
//     // bucket.upload(
//     //   req.files[0].path,
//     //   {
//     //     destination:
//     //     `productPhotos/${new Date().getTime()}-${req.files[0].originalname}`,
//     //   },
//     //   async (err, file, apiResponse) => {
//     //     if (!err) {
//     //       // console.log("api resp: ", apiResponse);
//     //       await file.getSignedUrl({
//     //         action: "read",
//     //         expires: "03-09-2491",
//     //       });
//     //       async (urlData, err) => {
//     //         if (!err) {
//     //           console.log("public downloadable url: ", urlData[0]); // this is public downloadable url
//     //           try {
//     //             fs.unlinkSync(req.files[0].path); //file removed
//     //           } catch (err) {
//     //             console.error(err);
//     //           }
//     //           await productModel.create(
//     //             {
//     //               productName: body.productName,
//     //               productDescription: body.productDescription,
//     //               productPrice: body.productPrice,
//     //               productImg: urlData[0],
//     //             },
//     //             (err, saved) => {
//     //               if (!err) {
//     //                 console.log("saved");
//     //                 res.send({
//     //                   message: "Your data is saved Successfully",
//     //                 });
//     //               } else {
//     //                 res.status(500).send({
//     //                   message: "error hy koi server ma",
//     //                 });
//     //               }
//     //             }
//     //           );
//     //         } else {
//     //           res.status(500).send({
//     //             message: "serverrr hy koi server ma",
//     //           });
//     //           console.log("errr: ", err);
//     //         }
//     //       };
//     //     } else {
//     //       console.log("err: ", err);
//     //       res.status(500).send("testing");
//     //     }
//     //   }
//     // );

//     await productModel.create(
//       {
//         productName: body.productName,
//         productDescription: body.productDescription,
//         productPrice: body.productPrice,
//         productImg: "no image",
//       },
//       (err, saved) => {
//         if (!err) {
//           console.log("saved");
//           res.send({
//             message: "Your data is saved (without img)",
//           });
//         } else {
//           res.status(500).send({
//             message: "error hy koi server ma",
//           });
//         }
//       }
//     );
//   }

export { createUserFun, loginFun };

import express from "express";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";

import userModel from "./database/model.mjs";

const SECRET = process.env.SECRET || "topsecret";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000", "*"],
    credentials: true,
  })
);

app.post("/login", async (req, res) => {
  let body = req.body;

  if (!body.email || !body.password) {
    // null check - undefined, "", 0 , false, null , NaN
    res.status(400).send(
      `required fields missing, request example: 
                {
                    "email": "abc@abc.com",
                    "password": "12345"
                }`
    );
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
});

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ this is for Students $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
// const __dirname = path.resolve();
// app.use("/", express.static(path.join(__dirname, "./WEB/build")));
// app.use("*", express.static(path.join(__dirname, "./WEB/build")));
//END
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//MongoDB
const dbURI =
  process.env.MongoDBURI ||
  "mongodb+srv://shehzad:LMLMLM@cluster0.wclhhvn.mongodb.net/JWT-form?retryWrites=true&w=majority";
await mongoose.connect(dbURI);

// MongoDB(dbURI)

// //for status of DB
// ////////////////mongodb connected disconnected events///////////
mongoose.connection.on(
  "connected",
  () => console.log("Mongoose is connected")
  // process.exit(1);
);

//disconnected
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose is disconnected");
  process.exit(1);
});

//any error
mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
  process.exit(1);
});

process.on("SIGINT", () => {
  //this function will run jst before app is closing
  console.log("app is terminating");
  mongoose.connection.close(function () {
    console.log("Mongoose default connection closed");
    process.exit(0);
  });
});
////////////////mongodb connected disconnected events\\\\\\\\\\\\\\

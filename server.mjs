import express from "express";
// import path from "path";
import cors from "cors";
import mongoose from "mongoose";
import { stringToHash, varifyHash } from "bcrypt-inzi";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

import { userModel } from "./database/model.mjs";
import { getAllUsersFun, getUser } from "./routes/GET.mjs";
import { createUser, loginFun } from "./routes/POST.mjs";
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
app.get("/test", () => console.log("server running"));
app.get("/users", getAllUsersFun);
app.get("/user/:id", getUser);

app.post("/login", loginFun);

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

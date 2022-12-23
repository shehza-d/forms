import express from "express";
// import path from "path";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// import { userModel } from "./database/model.mjs";
import { getAllUsersFun, getUser } from "./routes/GET.mjs";
import { createUserFun, loginFun } from "./routes/POST.mjs";

const SECRET = process.env.SECRET || "topsecret"; //to remove

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3000/signup",
      "http://localhost:3000/login",
      "https://shehzad-forms.surge.sh",
      "https://shehzad-forms.surge.sh/signup",
      "https://shehzad-forms.surge.sh/login",
      "*",
    ],
    credentials: true,//this is important
  })
);
app.get("/test", (req, res) => {
  console.log("server running");
  res.send("Server Running");
});

app.post("/signup", createUserFun);
app.post("/login", loginFun);
app.post("/logout", (req, res) => {
  res
    .status(401)
    .cookie("Token", "", { maxAge: 1, httpOnly: true })
    .send({ message: "Logout Successful" });
});
//middleware to check auth token
app.use((req, res, next) => {
  console.log("req.cookies: ", req.cookies);//it's a security vulnerability to print token in production

  if (!req?.cookies?.Token) {
    res
      .status(401)
      .send({ message: "Include http-only credentials with every request" });
    return;
  }

  jwt.verify(req.cookies.Token, SECRET, (err, decodedData) => {
    if (!err) {
      console.log("decodedData: ", decodedData); //it's a security vulnerability to print token in production

      if (decodedData.exp < new Date().getTime() / 1000) {
        res.status(401).send({ message: "Token expired" }).cookie("Token", "", {
          maxAge: 1,
          httpOnly: true,
        });
      } else {
        console.log("Token approved");

        req.body.token = decodedData;
        next();
      }
    } else {
      res.status(401).send("invalid token");
    }
  });
});

// app.post("/login", loginFun);
// app.post("/login", loginFun);
app.get("/users", getAllUsersFun);
app.get("/user/:id", getUser);

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
  mongoose.connection.close(() => {
    console.log("Mongoose default connection closed");
    process.exit(0);
  });
});
////////////////mongodb connected disconnected events\\\\\\\\\\\\\\

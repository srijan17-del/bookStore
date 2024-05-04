import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
// app.get("/", (req, res) => {
//   res.send("hola dnunit!");
// });
//connect to mongoDb database
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopoLogy: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error:", error);
}

//defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

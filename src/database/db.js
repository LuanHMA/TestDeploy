import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://admin:2103199510@cluster0.lhsdkvg.mongodb.net/todolist?retryWrites=true&w=majority"
  )
  .then(() => console.log("--DATABASE connected with success!"))
  .catch((error) => console.log("Error connecting to database: " + error));

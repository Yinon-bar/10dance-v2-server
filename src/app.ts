import express from "express";
import router from "./6-controller/router";

const app = express();

app.use(express.json());

app.use("/api", router);

app.listen(3001, () => {
  console.log("Listening to http://localhost:3001");
});

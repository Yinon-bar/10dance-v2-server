import express from "express";
import catchAll from "./3-middleware/catchAll";
import routeNotFound from "./3-middleware/routeNotFound";
import router from "./6-controller/router";

const app = express();

app.use(express.json());

app.use("/api", router);

app.use("*", routeNotFound);

app.use(catchAll);

app.listen(3001, () => {
  console.log("Listening to http://localhost:3001");
});

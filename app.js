import express from "express";
import { config } from "dotenv";
import assistantRoutes from "./router/assistant_route.js"

config();
const app = express();
app.use(express.json()); // joh bhi req mai body ati hai woh parse hoke agee jaye taki dubara parsing related work na krna pade

app.use(express.urlencoded({ extended: true }));

app.use("/ping", function (req, res) {
  //testing
  res.send("Pong");
});
app.use('/api/v1/',assistantRoutes);

app.all("*", (req, res) => {
  res.status(404).send("OOPS !! page not found");
});

export default app;

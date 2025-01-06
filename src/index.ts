import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes";
import configData from "./configs/config";

const app = express();
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(router);

app.listen(configData?.port, () => {
  console.log(`coffee-order-svc started on port :: ${configData?.port}`);
});

import express from "express";
import { getEnv } from "./src/global/envConfig.js";
import cors from "cors";
import RootRouter from "./src/routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(`/api/${getEnv.VERSION}`, RootRouter);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

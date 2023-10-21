import express from "express";
import { getEnv } from "./src/configs/env.config.js";
import cors from "cors";
import RootRoute from "./src/routes/index.js";
import { connectDB } from "./src/configs/mongoose.js";
import { handleError } from "./src/middlewares/handleError.mdw.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(cors());
app.use(express.json());

connectDB();

app.use(`/api/${getEnv.VERSION}`, RootRoute);

app.use(handleError);

const PORT = 8000;
app.listen(getEnv.PORT || PORT, () => {
  console.log("Server is running on port 8000");
});

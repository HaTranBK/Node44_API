import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import rootRouter from "./src/routers/rootRouter.js";
import { errorMiddleWare } from "./src/MiddleWares/ErrorMiddleWare.js";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    method: ["POST", "PUT", "DELETE", "GET"],
    credentials: true, //allow cookie be sent with request.
  })
);

app.use(express.json());
app.use(cookieParser());

app.use(rootRouter);

app.use(errorMiddleWare);
app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on the PORT http://localhost:${process.env.PORT}`
  );
});

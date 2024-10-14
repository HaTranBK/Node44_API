import { Router } from "express";
import resRouter from "./resRouter.js";

const rootRouter = Router();

rootRouter.use("/res", resRouter);

export default rootRouter;

import { Router } from "express";
import {
  disLikeRes,
  getLikeByRes,
  getLikeByUser,
  getRateByRes,
  getRateByUser,
  likeRes,
  makeOrder,
  rateRes,
} from "../controller/restaurent.js";
import { CatchAsyncError } from "../MiddleWares/CatchAsyncError .js";

const resRouter = Router();

resRouter.get("/like-by-res/:res_id", CatchAsyncError(getLikeByRes));
resRouter.get("/like-by-user/:user_id", CatchAsyncError(getLikeByUser));
resRouter.get("/rate-by-res/:res_id", CatchAsyncError(getRateByRes));
resRouter.get("/rate-by-user/:user_id", CatchAsyncError(getRateByUser));

resRouter.post("/like-res", CatchAsyncError(likeRes));
resRouter.post("/rate-res", CatchAsyncError(rateRes));
resRouter.post("/create-order", CatchAsyncError(makeOrder));

resRouter.delete("/dis-like-res", CatchAsyncError(disLikeRes));
export default resRouter;

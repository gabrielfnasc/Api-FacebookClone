import { Router, Express } from "express";
import CouncilRouter from "../routes/CouncilRouter";
import UserRouter from "../routes/UserRouter";

export default (app: Express): void => {
  const router = Router();
  app.use("/csl", router);

  UserRouter(router);
  CouncilRouter(router);
};

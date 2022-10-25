import { Router, Express } from "express";
import BusinessCouncilRouter from "../routes/BusinessCouncilRouter";
import UserRouter from "../routes/UserRouter";

export default (app: Express): void => {
  const router = Router();
  app.use("/csl", router);

  UserRouter(router);
  BusinessCouncilRouter(router);
};

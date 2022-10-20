import { Router, Express } from "express";
import UserRouter from "../routes/UserRouter";

export default (app: Express): void => {
  const router = Router();
  app.use("/fb", router);

  UserRouter(router);
};

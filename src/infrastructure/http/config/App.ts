import { Router, Express } from "express";
import setupMiddleware from "./middleware";
import setupRouter from "./Router";
export default (app: Express): void => {
  const router = Router();

  setupMiddleware(app);
  setupRouter(app);

  app.use("/teste", router);
};

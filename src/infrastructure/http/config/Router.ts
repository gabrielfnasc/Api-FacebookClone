import { Router, Express, response } from "express";

export default (app: Express): void => {
  const router = Router();
  app.use("/fb", router);
};

import { Router } from "express";
import { ExpressRouterAdapter } from "../../http/adapters/ExpressRouterAdapter";

export default (router: Router): void => {
  router.post("/user", ExpressRouterAdapter());
};

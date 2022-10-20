import { Router } from "express";
import { ExpressRouterAdapter } from "../../adapters/ExpressRouterAdapter";

export default (router: Router): void => {
  router.post("/user", ExpressRouterAdapter());
};

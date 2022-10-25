import { Router } from "express";
import { ExpressRouterAdapter } from "../../http/adapters/ExpressRouterAdapter";
import { CreateUserFactory } from "../../factories/user/CreateUserFactory";

export default (router: Router): void => {
  router.post("/user", ExpressRouterAdapter(CreateUserFactory.build()));
};

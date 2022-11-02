import { Router } from "express";
import { ExpressRouterAdapter } from "../../http/adapters/ExpressRouterAdapter";
import { CreateUserFactory } from "../../factories/user/CreateUserFactory";
import { DeleteUserFactory } from "../../factories/user/DeleteUserFactory";

export default (router: Router): void => {
  router.post("/user", ExpressRouterAdapter(CreateUserFactory.build()));
  router.delete(
    "/user/:userId",
    ExpressRouterAdapter(DeleteUserFactory.build())
  );
};

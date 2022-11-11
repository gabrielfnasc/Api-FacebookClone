import { Router } from "express";
import { ExpressRouterAdapter } from "../../http/adapters/ExpressRouterAdapter";
import { CreateUserFactory } from "../../factories/user/CreateUserFactory";
import { DeleteUserFactory } from "../../factories/user/DeleteUserFactory";
import { LoginFactory } from "../../factories/user/LoginFactory";
import { FindUSerByIdFactory } from "../../factories/user/FindUserByIdFactory";

export default (router: Router): void => {
  router.post("/user", ExpressRouterAdapter(CreateUserFactory.build()));
  router.delete(
    "/user/:userId",
    ExpressRouterAdapter(DeleteUserFactory.build())
  );
  router.post("/login", ExpressRouterAdapter(LoginFactory.build()));

  router.get("user/:userId", ExpressRouterAdapter(FindUSerByIdFactory.build()));
};

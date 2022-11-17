import { Router } from "express";
import { ExpressRouterAdapter } from "@src/infrastructure/http/adapters/ExpressRouterAdapter";
import {
  CreateUserFactory,
  FindAllUserFactory,
} from "@src/infrastructure/factories/user";
import { DeleteUserFactory } from "@src/infrastructure/factories/user";
import { LoginFactory } from "@src/infrastructure/factories/user";
import { FindUSerByIdFactory } from "@src/infrastructure/factories/user";
import { UpdateUserFactory } from "@src/infrastructure/factories/user";

export default (router: Router): void => {
  router.post("/user", ExpressRouterAdapter(CreateUserFactory.build()));
  router.delete(
    "/user/:userId",
    ExpressRouterAdapter(DeleteUserFactory.build())
  );
  router.post("/login", ExpressRouterAdapter(LoginFactory.build()));

  router.get(
    "/user/:userId",
    ExpressRouterAdapter(FindUSerByIdFactory.build())
  );

  router.put("/user/:userId", ExpressRouterAdapter(UpdateUserFactory.build()));

  router.get("/users", ExpressRouterAdapter(FindAllUserFactory.build()));
};

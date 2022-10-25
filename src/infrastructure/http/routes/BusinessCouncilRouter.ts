import { Router } from "express";
import { CreateBusinessCouncilFactory } from "../../factories/council/CreateBusinessCouncilFactory";
import { ExpressRouterAdapter } from "../adapters/ExpressRouterAdapter";

export default (router: Router): void => {
  router.post(
    "/business",
    ExpressRouterAdapter(CreateBusinessCouncilFactory.build())
  );
};

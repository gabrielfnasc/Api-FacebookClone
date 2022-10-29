import { Router } from "express";
import { CreateCouncilFactory } from "../../factories/council/CreateCouncilFactory";
import { ExpressRouterAdapter } from "../adapters/ExpressRouterAdapter";

export default (router: Router): void => {
  router.post(
    "/council/:userId",
    ExpressRouterAdapter(CreateCouncilFactory.build())
  );
};

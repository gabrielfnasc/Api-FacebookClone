import { Router } from "express";
import { CreateCouncilFactory } from "../../factories/council/CreateCouncilFactory";
import { FindCouncilByContentFactory } from "../../factories/council/FindCouncilByContentFactory";
import { ExpressRouterAdapter } from "../adapters/ExpressRouterAdapter";

export default (router: Router): void => {
  router.post(
    "/council/:userId",
    ExpressRouterAdapter(CreateCouncilFactory.build())
  );
  router.get(
    "/council",
    ExpressRouterAdapter(FindCouncilByContentFactory.build())
  );
};

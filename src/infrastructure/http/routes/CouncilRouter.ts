import { Router } from "express";
import { CreateCouncilFactory } from "@src/infrastructure/factories/council";
import { DeleteCouncilFactory } from "@src/infrastructure/factories/council";
import { FindCouncilByContentFactory } from "@src/infrastructure/factories/council";
import { UpdateCouncilFactory } from "@src/infrastructure/factories/council";
import { ExpressRouterAdapter } from "@src/infrastructure/http/adapters/ExpressRouterAdapter";

export default (router: Router): void => {
  router.post(
    "/council/:userId",
    ExpressRouterAdapter(CreateCouncilFactory.build())
  );
  router.get(
    "/council",
    ExpressRouterAdapter(FindCouncilByContentFactory.build())
  );

  router.delete(
    "/council/:userId",
    ExpressRouterAdapter(DeleteCouncilFactory.build())
  );

  router.put(
    "/council/:userId",
    ExpressRouterAdapter(UpdateCouncilFactory.build())
  );
};

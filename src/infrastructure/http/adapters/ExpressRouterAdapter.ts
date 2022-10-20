import { Response, Request } from "express";
import { BaseController } from "../../../infrastructure/controllers/BaseController";
export const ExpressRouterAdapter = (controller: BaseController): any => {
  const response = async (req: Request, res: Response) => {
    const request = {
      ...(req.body || {}),
      ...(req.params || {}),
    };

    const httpResponse = await controller.handle(request);
    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      res.status(httpResponse.statusCode).json(httpResponse.body);
    } else {
      res.status(httpResponse.statusCode).json({ message: httpResponse.body });
    }
  };

  return response;
};

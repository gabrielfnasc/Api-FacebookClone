import Express from "express";
import setupMiddleware from "@src/infrastructure/http/config/Middleware";
import setupRouter from "@src/infrastructure/http/config/Router";

const app = Express();

setupMiddleware(app);
setupRouter(app);

export default app;

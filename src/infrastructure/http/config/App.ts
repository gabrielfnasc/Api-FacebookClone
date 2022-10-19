import Express from "express";
import setupMiddleware from "./middleware";
import setupRouter from "./Router";

const app = Express();

setupMiddleware(app);
setupRouter(app);

export default app;

// combined entry file for all route even 1000 routes we will edit here
import { Router } from "express";
import { healthRouter } from "./health.routes";

export const apiRouter = Router();

// pluging all routes in one place
apiRouter.use(healthRouter);
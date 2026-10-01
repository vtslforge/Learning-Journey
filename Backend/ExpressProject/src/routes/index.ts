// combined entry file for all route even 1000 routes we will edit here
import { Router } from "express";
import { healthRouter } from "./health.routes";
import { authRouter } from "./auth.routes";

export const apiRouter = Router();

// pluging all routes in one place
apiRouter.use(healthRouter);
apiRouter.use('/auth',authRouter)
import type { NextFunction, Request, Response } from "express";
import { logger } from "../lib/logger";
import { appError } from "../errors/AppError";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (err instanceof appError) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
    return
  }
  logger.error({ err }, "unhandled error");
  res.status(500).json({
    success: false,
    message: "internal server error",
  });
}
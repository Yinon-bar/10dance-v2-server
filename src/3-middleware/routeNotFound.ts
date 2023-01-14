import { NextFunction, Request, Response } from "express";
import { RouteNotFoundModel } from "../4-models/errorModels";

function routeNotFound(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const err = new RouteNotFoundModel(request.originalUrl);
  next(err);
}

export default routeNotFound;

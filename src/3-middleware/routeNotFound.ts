import { HttpError } from './../4-models/error-handling';
import { NextFunction, Request, Response } from "express";

function routeNotFound(
  request: Request,
  response: Response,
  next: NextFunction
) {
  return next(new HttpError(request.originalUrl + " not found", 404));
}

export default routeNotFound;

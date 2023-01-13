import { NextFunction, Request, Response } from "express";
import { getAllAttendees } from "../5-logic/attendeesLogic";

export const getAllAttendeesCtrl = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const attendees = await getAllAttendees();
    response.json(attendees);
  } catch (error) {
    next(error);
  }
};

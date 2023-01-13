import { NextFunction, Request, Response } from "express";
import { getAllAttendees, attendeeCheckIn } from "../5-logic/attendeesLogic";

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

export const attendeeCheckInCtrl = async (
  request: Request, response: Response, next: NextFunction) => {
    try {
      const { national_id } = request.params;
      const attendeeCheckedIn = await attendeeCheckIn(national_id);
      response.status(200);
    } catch (error) {
      next(error);
    }
  }
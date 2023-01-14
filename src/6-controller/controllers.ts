import { NextFunction, Request, Response } from "express";
import AttendeeModel from "../4-models/AttendeeModel";
import { getAllAttendees } from "../5-logic/attendeesLogic";

// GET all attendee
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

// ADD new Attendee
export const addAttendeeCtrl = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const attendee = new AttendeeModel(request.body);
    response.json(attendee);
  } catch (error) {
    next(error);
  }
};

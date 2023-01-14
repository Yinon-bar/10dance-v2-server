import { NextFunction, Request, Response } from "express";
import { AttendeeModel, validateAttendee } from "../4-models/AttendeeModel";
import { getAllAttendees, attendeeCheckIn } from "../5-logic/attendeesLogic";
import { HttpError } from "../4-models/error-handling";

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

export const attendeeCheckInCtrl = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { national_id } = request.params;
    const attendeeCheckedIn = await attendeeCheckIn(national_id);
    response.status(200);
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
    const { first_name, last_name, national_id, arrived } = request.body;
    if (
      !first_name ||
      !last_name ||
      !national_id ||
      typeof arrived !== "boolean"
    ) {
      return next(new HttpError("Missing fields", 401));
    }

    const receivedFields = { first_name, last_name, national_id, arrived };
    
    const isAttendeeValid = validateAttendee(receivedFields);
    if (isAttendeeValid.error) {
      return next(new HttpError(isAttendeeValid.error.message, 400));
    }

    const newAttendee = new AttendeeModel(receivedFields);
    await newAttendee.save();
    response.json({ newAttendee: newAttendee.toObject({ getters: true }) })
  } catch (error) {
    next(error);
  }
};

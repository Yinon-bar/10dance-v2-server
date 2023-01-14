import Joi from "joi";
import mongoose from "mongoose";
import type { Attendee } from "../interfaces/attendee";

const attendeeSchema = new mongoose.Schema<Attendee>({
  first_name: String,
  last_name: String,
  national_id: String,
  arrived: Boolean,
});

export const AttendeeModel = mongoose.model("Attendee", attendeeSchema);

export const validateAttendee = (attendee: Attendee) => {
  const joiSchema = Joi.object({
    id: Joi.string(),
    first_name: Joi.string(),
    last_name: Joi.string(),
    national_id: Joi.string().length(9),
    arrived: Joi.boolean(),
  });

  return joiSchema.validate(attendee);
};

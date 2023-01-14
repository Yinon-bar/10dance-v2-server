import { Attendee } from "../interfaces/attendee";
import { AttendeeModel } from "../4-models/AttendeeModel";

const dummyAttendees = JSON.stringify([
  {
    id: "484gh4g3737",
    first_name: "yaron",
    last_name: "veg",
    national_id: "200454552",
    arrived: false,
  },
  {
    id: "894gh5ft737",
    first_name: "Yinon",
    last_name: "Bar",
    national_id: "200454555",
    arrived: false,
  },
]);

// get all attendee
async function getAllAttendees(): Promise<Attendee[]> {
  const attendees = JSON.parse(dummyAttendees);
  return attendees;
}

async function setAttendeeArrived(
  national_id: string
): Promise<boolean> {
  return true;
}

// add attendee
async function addNewAttendee(attendee: Attendee) {
  const newAttendee = new AttendeeModel(attendee);
  return await newAttendee.save();
}

export default {
  getAllAttendees,
  addNewAttendee,
  setAttendeeArrived,
};

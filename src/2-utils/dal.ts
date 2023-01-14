import AttendeeModel from "../4-models/AttendeeModel";

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
async function getAllAttendees(): Promise<AttendeeModel[]> {
  const attendees = JSON.parse(dummyAttendees);
  return attendees;
}

export async function setAttendeeArrived(national_id: string): Promise<boolean> {
  return true;
}

// add attendee
async function addNewAttendee(attendee: AttendeeModel): Promise<AttendeeModel> {
  const newattendee = JSON.parse(dummyAttendees[0]);
  return newattendee;
}

// body: first_name: string, last_name, national_id, arrived: boolean}

export default {
  getAllAttendees,
  addNewAttendee,
  setAttendeeArrived,
};

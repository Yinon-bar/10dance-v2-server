import AttendeeModel from "../4-models/AttendeeModel";
import dal from "../2-utils/dal";

// Get all attendees:
export async function getAllAttendees(): Promise<AttendeeModel[]> {
  const attendees = await dal.getAllAttendees();
  return attendees;
}
// POST one attendee:
export async function addSingleAttendee(
  attendee: AttendeeModel
): Promise<AttendeeModel> {
  const newAttendee = await dal.addNewAttendee(attendee);
  return newAttendee;
}

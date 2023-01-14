import AttendeeModel from "../4-models/AttendeeModel";
import dal from "../2-utils/dal";

export async function getAllAttendees(): Promise<AttendeeModel[]> {
  const attendees = await dal.getAllAttendees();
  return attendees;
}

export async function attendeeCheckIn(national_id: string): Promise<boolean> {
  
  const checkedIn = await dal.setAttendeeArrived(national_id);
  return checkedIn;
}

// POST one attendee:
export async function addSingleAttendee(
  attendee: AttendeeModel
): Promise<AttendeeModel> {
  const newAttendee = await dal.addNewAttendee(attendee);
  return newAttendee;
}

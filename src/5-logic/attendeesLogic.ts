import dal from "../2-utils/dal";
import { Attendee } from "../interfaces/attendee";

export async function getAllAttendees(): Promise<Attendee[]> {
  const attendees = await dal.getAllAttendees();
  return attendees;
}

export async function attendeeCheckIn(national_id: string): Promise<boolean> {
  
  const checkedIn = await dal.setAttendeeArrived(national_id);
  return checkedIn;
}

// POST one attendee:
export async function addSingleAttendee(
  attendee: Attendee
): Promise<Attendee> {
  const newAttendee = await dal.addNewAttendee(attendee);
  return newAttendee;
}

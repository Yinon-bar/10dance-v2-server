import AttendeeModel from "../4-models/AttendeeModel";

const dummyAttendees = JSON.stringify([
  {
    id: "484gh4g3737",
    first_name: "yaron",
    last_name: "veg",
    national_id: "200454552",
    arrived: false,
  },
]);

export async function getAllAttendees(): Promise<AttendeeModel[]> {
  const attendees = JSON.parse(dummyAttendees);
  return attendees;
}

// body: first_name: string, last_name, national_id, arrived: boolean}

export default { getAllAttendees };

import { Router } from "express";
import { addAttendeeCtrl, getAllAttendeesCtrl, attendeeCheckInCtrl } from "./controllers";

const router = Router();

router.get("/attendee", getAllAttendeesCtrl);
router.post("/attendee/add", addAttendeeCtrl);
router.post("/attendee/check_in/:national_id", attendeeCheckInCtrl);

export default router;

// PATCH {base_url}/API/attendee/edit/:attendee_id {body}  error response: { message: string }

// DELETE {base_url}/API/attendee/delete/:attendee_iderror response: { message: string }

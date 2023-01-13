import { Router } from "express";
import { getAllAttendeesCtrl, attendeeCheckInCtrl } from "./controllers";

const router = Router();

router.get("/attendee", getAllAttendeesCtrl);

router.post("/attendee/check_in/:national_id", attendeeCheckInCtrl);

export default router;

// POST {base_url}/API/attendee/check_in/:national_id error response: { message: string }

// POST {base_url}/API/attendee/add {body: first_name: string, last_name, national_id, arrived: boolean}  error response: { message: string }

// PATCH {base_url}/API/attendee/edit/:attendee_id {body}  error response: { message: string }

// DELETE {base_url}/API/attendee/delete/:attendee_iderror response: { message: string }

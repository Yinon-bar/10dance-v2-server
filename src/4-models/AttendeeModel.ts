class AttendeeModel {
  public id: string;
  public first_name: string;
  public last_name: string;
  public national_id: string;
  public arrived: boolean;

  public constructor(attendee: AttendeeModel) {
    this.id = attendee.id;
    this.first_name = attendee.first_name;
    this.last_name = attendee.last_name;
    this.national_id = attendee.national_id;
    this.arrived = attendee.arrived;
  }
}

export default AttendeeModel;

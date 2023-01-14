export class HttpError {
    constructor(message:string, errorCode: number) {
      this['message'] = message; // add a 'message' property
      this['code'] = errorCode; // add a 'code' property
    }
  }
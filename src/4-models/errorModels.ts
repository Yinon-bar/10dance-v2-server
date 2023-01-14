export class ErrorModel {
  public constructor(public msg: string, public status: number) {}
}

export class RouteNotFoundModel extends ErrorModel {
  public constructor(route: string) {
    super(`Route ${route} not found`, 404);
  }
}

export class FetchActions {
  static DETAILS = "DETAILS";

  static getLinkDetails = payload => ({
    type: FetchActions.DETAILS,
    payload
  });
}

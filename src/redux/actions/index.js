export class AuthAction {
    static DETAILS = "DETAILS";

    static getLinkDetails = (payload) => ({
        type: AuthAction.DETAILS,
        payload
    })

}
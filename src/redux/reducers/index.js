import { AuthAction } from '../actions/'
const initialState = {
    isLoggedIn: false,
    detail: {},
}
export default function (state = initialState, action) {
    switch (action.type) {
        // case AuthAction.LOGIN:
        //     return { ...state, isLoggedIn: action.payload };
        // case AuthAction.LOGOUT:
        //     return {
        //         isLoggedIn: false,
        //     }
        // case AuthAction.ALREADYLOGIN:
        //     return {
        //         ...state, isLoggedIn: true, detail: action.payload
        //     }
        default:
            return state;
    }
}
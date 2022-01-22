import { get } from "lodash";
const defaultState = {
    data: [],
    fetching: false
}
export default function listReducer(state = defaultState, action) {
    switch (action.type) {
        case "SET_LIST": {
            let response = action.payload;
            return {
                ...state,
                data: get(response, 'data')
            }
        }
    }
    return state;
}
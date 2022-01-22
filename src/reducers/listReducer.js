import { get } from "lodash";
const defaultState = {
    data: [],
    fetching: false
}
export default function listReducer(state = defaultState, action) {
    console.log('state ', action.type);
    switch (action.type) {
        case "FETCH_LIST_PENDING": {
            console.log("pending");
            return {
                ...state,
                fetching: true,
                data: []
            }
        }
        case "FETCH_LIST_REJECTED": {
            console.log('reject');
            return {
                ...state,
                fetching: false
            }
        }
        case "FETCH_LIST_FULFILLED": {
            console.log('success');
            let response = action.payload.data;
            return {
                ...state,
                fetching: false,
                data: get(response, 'data')
            }
        }
        case "SET_LIST": {
            let response = action.payload;
            console.log("response !!!!!!!!!!!! ", response);
            return {
                ...state,
                data: get(response, 'data')
            }
        }


    }
    return state;
}
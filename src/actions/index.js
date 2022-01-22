import api from "./api";

export function fetchList() {
	return dispatch => {
		dispatch({
			type: "FETCH_LIST",
			payload: api.get('/cms/feed.xml')
		})
	};
}

export function setFetchedData(data) {
	return dispatch => {
		dispatch({
			type: "SET_LIST",
			payload: {data}
		})
	};
}
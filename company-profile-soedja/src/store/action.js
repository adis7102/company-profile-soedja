export function Loading(payload){
    return dispatch => {
        dispatch({
            type: 'LOADING',
            payload: true
        })
    }
}

export function ModalLaunchingController(payload) {
    return dispatch => {
        dispatch({
            type: 'MODAL_LAUNCHING',
            payload: payload
        })
    }
}

export function ChangeLanguage(payload) {
    return dispatch => {
        dispatch({
            type: "CHANGE_LANGUAGE",
            payload: payload
        })
    }
}
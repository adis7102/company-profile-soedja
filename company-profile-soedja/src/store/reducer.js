export default (state, action) => {
    switch (action.type) {
        case "LOADING":
            return {
                ...state,
                loading: action.payload
            }
        case "MODAL_LAUNCHING":
            return {
                ...state,
                modalLaunching: action.payload
            }
        case "CHANGE_LANGUAGE":
            return {
                ...state, 
                language: action.payload
            }
        default:
            return {
                loading : false,
                modalLaunching : false,
                language: 'ind'
            }
    }
}

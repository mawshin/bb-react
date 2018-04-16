export default(state = {
    currentPage: "home",
}, payload) => {
    switch (payload.type) {
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: payload.page
            }
        default:
            return state;
    }
};

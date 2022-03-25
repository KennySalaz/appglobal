export const initialState = {
    user: null
}

export const actionTypes = {
    USER_FIREBASE: 'USER_FIREBASE'
}


const reducer = (action, state) => {

    switch (action.types) {
        case 'USER_FIREBASE':
            return {
                ...state,
                user: action.user
            }

        default: return state
    }
}


export default reducer

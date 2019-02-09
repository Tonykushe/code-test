import { GET_USERS, GET_USER, EDIT_USER } from "./userConstants";

const initialState = {
    users: [],
    user: {}
}


const userReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case EDIT_USER:
            return {
                ...state,
                users: state.users.map(user => 
                    user.id === action.payload.id ? (user = action.payload) : user
                )
                
            }
     
        default:
            return state
    }
}

export default userReducer
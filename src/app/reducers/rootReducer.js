import { combineReducers } from "redux";
import userReducer from '../../components/users/userReducer';



const rootReducer = combineReducers({
   users: userReducer
})

export default rootReducer;
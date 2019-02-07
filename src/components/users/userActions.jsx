import axios from 'axios'
import { GET_USERS } from "./userConstants";


// GET ALL USERS
export const getUsers = () => dispatch => {
    axios.get("https://ti-react-test.herokuapp.com/users")
        .then(res => 
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
        ).catch(err => console.log(err))
}
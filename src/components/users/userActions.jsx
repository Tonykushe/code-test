import axios from 'axios'
import { GET_USERS, GET_USER, EDIT_USER } from "./userConstants";


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


// GET USER BY ID
export const getUser = (id) => dispatch => {
    axios.get(`https://ti-react-test.herokuapp.com/users/${id}`)
        .then(res => 
            dispatch({
                type: GET_USER,
                payload: res.data
            })
        ).catch(err => console.log(err))
}


// UPDATE USER PROFILE
export const editUser = (userData) => dispatch => {
    axios.patch(`https://ti-react-test.herokuapp.com/users/${userData.id}`, userData)
        .then(res => 
                dispatch({
                    type: EDIT_USER,
                    payload: res.data
                })
            ).catch(err => console.log(err))
       
}


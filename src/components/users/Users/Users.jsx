import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getUsers} from '../userActions'
import UserItem from './UserItem'


const actions = {
    getUsers
}

const mapState = (state) => ({
    users: state.users
})


class Users extends Component {
    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        const { users } = this.props.users
        let userItems

        if (users.length > 0) {
            userItems = users.map(user => (
                <UserItem key={user.id} user={user}/>
            ))
        }
        return (
            <div className='users'>
                <div className="container">
                    {userItems}
                </div>
            </div>
        );
    }
}

Users.propTypes = {
    users: PropTypes.object.isRequired,
    getUsers: PropTypes.func.isRequired
}

export default connect(mapState, actions)(Users);
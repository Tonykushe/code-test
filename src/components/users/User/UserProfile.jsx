import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ProfileItem from './ProfileItem';
import { getUser } from "../userActions";


const actions = {
    getUser
}


const mapState = (state) => ({
    user: state.users
})

class UserProfile extends Component {

    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.getUser(this.props.match.params.id)
        }
    }
    render() {
        const { user } = this.props.user
        const profileItem = (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/" className="btn btn-light mb-3 float-left">
                            Back To Users
                        </Link>
                    </div>
                    <div className="col-md-6" />
                </div>
                <ProfileItem user={user}/>

            </div>
        )


        return (
            <div>
                {profileItem}
            </div>
        );
    }
}

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired
};

export default connect(mapState, actions)(UserProfile);
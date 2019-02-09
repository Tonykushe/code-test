import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { editUser, getUser } from "../userActions";
import TextInput from '../../../app/common/form/TextInput'

const actions = {
    editUser,
    getUser
}

const mapState = (state) => ({
    users: state.users.user
})


class EditUser extends Component {
    
    state = {
        name: '',
        occupation: '',
        email: '',
        bio: '',
        
    }

    componentWillReceiveProps(nextProps, nextState) {
        const { name, occupation, email, bio } = nextProps.users;
        this.setState({
            name,
            occupation,
            email,
            bio
        });
    }


    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getUser(id)
    }
    

    onChange = ({ target }) => {
        this.setState({ [target.name]: target.value })
    }

    onSubmit =  (e) => {
        e.preventDefault();
        const { name, occupation, email, bio } = this.state
        const { id } = this.props.match.params;

        const userData = {
            id,
            name,
            occupation,
            email,
            bio
            
        }
        
        this.props.editUser(userData)
        // Clear State
        this.setState({
            name: '',
            occupation: '',
            email: '',
            bio: '',
        });

        this.props.history.goBack()
    }

    render() {
        const { name, occupation, email, bio } = this.state;
        return (
            <div className="edit-user">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 m-auto">
                            
                            <h1 className="display-4 text-center">Edit User</h1>
                            <form onSubmit={this.onSubmit}>
                                <TextInput
                                    type='name'
                                    placeholder="Name"
                                    name="name"
                                    value={name}
                                    onChange={this.onChange}
                                />
                                <TextInput
                                    type='occupation'
                                    placeholder="Occupation"
                                    name="occupation"
                                    value={occupation}
                                    onChange={this.onChange}
                                />
                                <TextInput
                                    type='email'
                                    placeholder="Email"
                                    name="email"
                                    value={email}
                                    onChange={this.onChange}
                                />
                                <TextInput
                                    type='bio'
                                    placeholder="Bio"
                                    name="bio"
                                    value={bio}
                                    onChange={this.onChange}
                                    info="Tell us a little about yourself "
                                />
                                
                            
                                <input type="submit" value="Submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapState, actions)(withRouter(EditUser));
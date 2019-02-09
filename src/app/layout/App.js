import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar'
import Users from '../../components/users/Users/Users';
import UserProfile from '../../components/users/User/UserProfile';
import EditUser from '../../components/users/User/EditUser';


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <div className="container">
                        <Route exact path='/' component={Users}/>
                        <Route exact path='/users/:id' component={UserProfile}/>
                        <Route exact path='/edit-user/:id' component={EditUser}/>
                    
                    </div>
                </div>

            </Router>
            
        );
    }
}

export default App;

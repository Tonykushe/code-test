import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar'
import Users from '../../components/users/Users/Users';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Users />
                
                
            </div>
        );
    }
}

export default App;

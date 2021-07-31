import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    render() {
        const { currentUser, logout } = this.props;

        if (currentUser) {
            return (
                <div>
                    <h2>Welcome {currentUser.username}!</h2>
                    <button onClick={logout}>Log Out</button>
                </div>
            )
        } else {
            return (
                <nav>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Register</Link>
                </nav>
            )
        }
    }
}

export default Greeting;
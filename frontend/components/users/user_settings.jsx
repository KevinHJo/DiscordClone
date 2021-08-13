import React from 'react';

class UserSettings extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Welcome {this.props.currentUser.username}!</h2>
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        )
        
    }
}

export default UserSettings;
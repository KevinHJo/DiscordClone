import React from 'react';
import ServerIndexContainer from '../servers/server_index_container'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUserServers(this.props.currentUser.id);
    }

    render() {
        return (
            <div>
                <ServerIndexContainer userServers={this.props.userServers}/>
            </div>
        )
    }
}

export default HomePage
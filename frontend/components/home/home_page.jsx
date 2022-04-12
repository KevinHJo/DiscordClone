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
            <div id="home-page-container">
                <ServerIndexContainer userServers={this.props.userServers}/>

                <div id="dm-index">

                </div>
                
                <div id="home-page">
                    
                </div>

                <div id="friends-list">

                </div>
            </div>
        )
    }
}

export default HomePage
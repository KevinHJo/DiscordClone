import React from 'react';
import ChannelShowContainer from '../channels/channel_show_container';

class ServerShow extends React.Component {
    constructor(props) {
        super(props);

        this.renderChannelList = this.renderChannelList.bind(this);
    }

    componentDidMount() {
        this.props.fetchServer(this.props.serverId);
    }

    renderChannelList() {
        return (
            <ul>
                {
                    this.props.server.serverChannels.map(channel => {
                        return (
                            <li key={channel.id}>
                                <i className="fas fa-hashtag"></i>
                                <p>{channel.name}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    
    render() {
        if (this.props.server) {
            return (
                <div className='server'>
                    <div className='server-panel'>
                        <div className='server-header'>
                            {this.props.server.name}
                        </div>

                        <div className='server-channels'>
                            {this.renderChannelList()}
                        </div>

                        <div className='user-settings'>
                            <div className='user-profile-pic'>
                                <img src={'/images/pfp.png'} />
                            </div>
                            <p className='user-panel-username'>{this.props.currentUser.username}</p>

                            <nav className='user-settings-nav'>
                                <i class="fas fa-cog"></i>
                            </nav>
                        </div>
                    </div>

                    <ChannelShowContainer channelId={this.props.channelId}/>
                </div>
            )
        } else {
            return null
        }
    }
}

export default ServerShow
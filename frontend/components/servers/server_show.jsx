import React from 'react';
import ChannelShowContainer from '../channels/channel_show_container';

class ServerShow extends React.Component {
    constructor(props) {
        super(props);

        this.renderTextChannelList = this.renderTextChannelList.bind(this);
    }

    componentDidMount() {
        this.props.fetchServer(this.props.serverId);
    }

    renderTextChannelList() {
        return (
            <ul class='server-channel-list'>
                {
                    this.props.server.serverChannels.map(channel => {
                        return (
                            <li className= 'server-channel' key={channel.id}>
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
                            <p className='server-name'>{this.props.server.name}</p>
                        </div>

                        <div className='text-channels'>
                            <div className='channel-list-header'>
                                <h2>TEXT CHANNELS</h2>
                                <i class="fas fa-plus"></i>
                            </div>
                            
                            {this.renderTextChannelList()}
                        </div>
                        

                        <div className='user-panel'>
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
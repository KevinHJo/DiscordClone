import React from 'react';
import ChannelShowContainer from '../channels/channel_show_container';
import ChannelForm from '../channels/channel_form'

class ServerShow extends React.Component {
    constructor(props) {
        super(props);

        this.renderTextChannelList = this.renderTextChannelList.bind(this);
        this.selectActiveChannel = this.selectActiveChannel.bind(this);
        this.displayChannelForm = this.displayChannelForm.bind(this);
    }

    componentDidMount() {
        this.props.fetchServer(this.props.serverId);
    }

    selectActiveChannel(id) {
        if (id === this.props.channelId) {
            return 'server-channel active';
        } else {
            return 'server-channel';
        }
    }

    renderTextChannelList() {
        return (
            <ul class='server-channel-list'>
                {
                    this.props.server.serverChannels.map(channel => {
                        return (
                            <li className={this.selectActiveChannel(channel.id)} key={channel.id}>
                                <i className="fas fa-hashtag"></i>
                                <p>{channel.name}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    renderChannelListHeader() {
        if (this.props.currentUser.id === this.props.server.owner_id) {
            return (
                <div className='channel-list-header'>
                    <h2>TEXT CHANNELS</h2>
                    <i class="fas fa-plus" onClick={this.displayChannelForm}></i>
                </div>
            )
        } else {
            return (
                <div className='channel-list-header'>
                    <h2>TEXT CHANNELS</h2>
                </div>
            )
        }
    }

    displayChannelForm(e) {
        e.preventDefault();
        const channelForm = document.getElementsByClassName('channel-form-container')[0];
        const closeFormBtn = document.getElementsByClassName('close-channel-form')[0];
        console.dir(channelForm);
        console.dir(closeFormBtn);
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
                            {this.renderChannelListHeader()}
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
                    <ChannelForm createChannel={this.props.createChannel} serverId={this.props.serverId}/>
                </div>
            )
        } else {
            return null
        }
    }
}

export default ServerShow
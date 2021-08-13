import React from 'react';
import ChannelShowContainer from '../channels/channel_show_container';
import ChannelForm from '../channels/channel_form'
import UserSettings from '../users/user_settings';
import { Link } from 'react-router-dom';

class ServerShow extends React.Component {
    constructor(props) {
        super(props);

        this.renderTextChannelList = this.renderTextChannelList.bind(this);
        this.selectActiveChannel = this.selectActiveChannel.bind(this);
        this.displayChannelForm = this.displayChannelForm.bind(this);
        this.displayUserSettings = this.displayUserSettings.bind(this);
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
            <ul className='server-channel-list'>
                {
                    this.props.server.serverChannels.map(channel => {
                        return (
                            <Link to={`/channels/${this.props.serverId}/${channel.id}`} className={this.selectActiveChannel(channel.id)}>
                                <i className="fas fa-hashtag"></i>
                                <p>{channel.name}</p>
                            </Link>
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
                    <i className="fas fa-plus" onClick={this.displayChannelForm}></i>
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
        channelForm.style.display = 'block'
    }

    displayUserSettings(e) {
        e.preventDefault();
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
                                <i className="fas fa-cog" onClick={this.displayUserSettings}></i>
                            </nav>
                        </div>
                    </div>

                    <ChannelShowContainer channelId={this.props.channelId}/>
                    <ChannelForm createChannel={this.props.createChannel} serverId={this.props.serverId}/>
                    <UserSettings currentUser={this.props.currentUser} logout={this.props.logout}/>
                </div>
            )
        } else {
            return null
        }
    }
}

export default ServerShow
import React from 'react';
import PostIndexContainer from '../posts/channel_posts_container';

class ChannelShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userListActive: true
        }

        this.renderChannelUserList = this.renderChannelUserList.bind(this);
        this.renderChannelHeader = this.renderChannelHeader.bind(this);
        this.toggleUserList = this.toggleUserList.bind(this);
    }

    componentDidMount() {
        this.props.fetchChannel(this.props.channelId);
    }

    toggleUserList(e) {
        e.preventDefault();
        e.currentTarget.classList.toggle('active');
        if (this.state.userListActive) {
            this.setState({userListActive: false})
        } else {
            this.setState({userListActive: true})
        }
    }

    renderChannelUserList() {
        if (this.props.users && this.state.userListActive) {
            return (
                <div className='channel-users'>
                    <ul className='user-list'>
                        {this.props.users.map(user => {
                            return (
                            <li className='user-list-item' key={user.id}>
                                <div className='user-profile-pic'>
                                    <img src={'/images/pfp.png'} />
                                </div>

                                <p>
                                    {user.username}
                                </p>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            )
        } else {
            return null;
        }
    }

    renderChannelHeader() {
        if(this.props.channel) {
            return (
                <div className='channel-header'>
                    <div className='channel-name'>
                        <i className="fas fa-hashtag"></i>
                        <p>{this.props.channel.name}</p>
                    </div>

                    <div className='channel-nav'>
                        <li className={'user-list-icon active'} onClick={this.toggleUserList}>
                            <i class="fas fa-user-friends"></i>
                        </li>
                    </div>
                </div>
            )
        } else {
            return null
        }
    }

    render() {
        return (
            <div className='channel'>
                {this.renderChannelHeader()}

                <div className='channel-body'>
                    <div className='post-wall'>
                        <PostIndexContainer channelId={this.props.channelId}/>
                    </div>

                    {this.renderChannelUserList()}
                </div>
            </div>
        )
    }
}

export default ChannelShow
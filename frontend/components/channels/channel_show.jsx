import React from 'react';
import PostIndexContainer from '../posts/channel_posts_container';

class ChannelShow extends React.Component {
    constructor(props) {
        super(props);

        this.renderChannelUserList = this.renderChannelUserList.bind(this);
        this.renderChannelHeader = this.renderChannelHeader.bind(this);
    }

    componentDidMount() {
        this.props.fetchChannel(this.props.channelId);
    }

    renderChannelUserList() {
        if (this.props.users) {
            return (
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

                    <div className='channel-users'>
                        {this.renderChannelUserList()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ChannelShow
import React from 'react';
import PostIndexContainer from '../posts/channel_posts_container';

class ChannelShow extends React.Component {
    constructor(props) {
        super(props);
        console.dir(props.channels);
        console.dir(props.users);

        this.renderChannelUserList = this.renderChannelUserList.bind(this);
    }

    componentDidMount() {
        // this.props.fetchUsers();
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

    render() {
        return (
            <div className='channel'>
                <div className='post-wall'>
                    <PostIndexContainer channelId={this.props.channelId}/>
                </div>

                <div className='channel-users'>
                    {this.renderChannelUserList()}
                </div>
            </div>
        )
    }
}

export default ChannelShow
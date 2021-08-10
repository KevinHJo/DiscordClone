import React from 'react';
import PostIndexContainer from '../posts/post_index_container';

class ChannelShow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='channel'>
                <div className='post-wall'>
                    <PostIndexContainer channelId={this.props.channelId}/>
                </div>

                <div className='channel-users'>
                    <ul>

                    </ul>
                </div>
            </div>
        )
    }
}

export default ChannelShow
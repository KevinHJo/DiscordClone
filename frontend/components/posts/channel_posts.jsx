import React from 'react';
import PostForm from './post_form';
import PostIndexItem from './channel_post_item'

class ChannelPosts extends React.Component {
    constructor(props) {
        super(props);
        this.bottom = React.createRef();
    }

    componentDidUpdate() {
        // debugger
        this.bottom.current.scrollIntoView();
    }

    componentDidMount() {
        // debugger
        if (App.cable.subscriptions.subscriptions.filter(sub => JSON.parse(sub.identifier).threadId === this.props.channelId).length < 1) {
            // debugger
            App.cable.subscriptions.create(
                {channel: "ChatChannel", threadId: this.props.channelId},
                {
                    received: data => {
                        switch (data.type) {
                            case 'post':
                                this.props.receivePost(data.post);
                                break;
                            case 'posts':
                                this.props.receiveUsers(data.users)
                                this.props.receivePosts(data.posts);
                                break;
                            case 'removedPost':
                                this.props.removePost(data.postId);
                                break;
                        }
                    },
                    speak: function(data) {
                        return this.perform("speak", data);
                    },
                    load: function() {
                        return this.perform("load");
                    },
                    update: function(data) {
                        return this.perform("update", data);
                    },
                    delete: function(data) {
                        return this.perform("delete", data)
                    }
                }
            );
        } else {
            App.cable.subscriptions.subscriptions.filter(sub => JSON.parse(sub.identifier).threadId === this.props.channelId)[0].load()
        }
    }

    renderPostList() {
        // debugger
        if (this.props.posts[0]) {
            return (
                    <ul className='post-history'>
                        {
                            this.props.posts.map(post => {
                                return (
                                    <PostIndexItem post={post} users={this.props.users}/>
                                )
                            }, this) // 'this' ensures context for 'this.props.users'
                        }
                        <div ref={this.bottom}/>
                    </ul>
            )
        } else {
            return (
                <div>
                    <p>Loading Posts</p>
                    <div ref={this.bottom}/>
                </div>
            )
        } 
    }

    render() {
        return (
            <div className='posts'>
                {this.renderPostList()}
                
                <PostForm currentUser={this.props.currentUser}/>
            </div>
        )
    }
}

export default ChannelPosts;
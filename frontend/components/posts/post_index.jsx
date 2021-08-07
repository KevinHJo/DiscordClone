import React from 'react';
import PostForm from './post_form';
import PostIndexItem from './post_index_item'

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
        this.bottom = React.createRef();
    }

    componentDidUpdate() {
        this.bottom.current.scrollIntoView();
    }

    componentDidMount() {
        App.cable.subscriptions.create(
            {channel: "ChatChannel"},
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
    }

    renderPostList() {
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
                <li>
                    <p>Loading Posts</p>
                    <div ref={this.bottom}/>
                </li>
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

export default PostIndex;
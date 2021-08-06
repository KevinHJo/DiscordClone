import React from 'react';
import PostForm from './post_form';
import PostIndexItem from './post_index_item'

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
        this.bottom = React.createRef();
        // this.loadPosts = this.loadPosts.bind(this);
    }

    componentDidUpdate() {
        this.bottom.current.scrollIntoView();
    }

    componentDidMount() {
        console.dir(App.cable.subscriptions);
        App.cable.subscriptions.create(
            {channel: "ChatChannel"},
            {
                received: data => {
                    switch (data.type) {
                        case 'post':
                            this.props.receivePost(data.post);
                            break;
                        case 'posts':
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
       if (this.props.posts) {
            return (
                    <ul className='post-history'>
                        {
                            this.props.posts.map(post => {
                                return (
                                    <li key={post.id}>
                                        <PostIndexItem post={post}/>
                                    </li>
                                )
                            })
                        }
                        <div ref={this.bottom}/>
                    </ul>
                    
            )
        } else {
            return null
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
import React from 'react';
import PostForm from './post_form';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
        this.bottom = React.createRef();
    }

    componentDidMount() {
        this.props.fetchPosts();
        console.dir(App.cable.subscriptions);
        App.cable.subscriptions.create(
            {channel: "ChatChannel"},
            {
                received: data => {
                    this.props.receivePost(data)
                },
                speak: function(data) {
                    return this.perform("speak", data);
                }
            }
        );
    }

    componentDidUpdate() {
        this.bottom.current.scrollIntoView();
    }

    renderPostList() {
       if (this.props.posts) {
            return (
                    <ul>
                        {
                            this.props.posts.map(post => {
                                return (
                                    <li key={post.id}>
                                        {post.body}
                                        <div ref={this.bottom}/>
                                    </li>
                                )
                            })
                        }
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
                <PostForm currentUser={this.props.currentUser} createPost={this.props.createPost}/>
            </div>
        )
    }
}

export default PostIndex;
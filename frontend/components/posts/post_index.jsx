import React from 'react';
import PostForm from './post_form';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();
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
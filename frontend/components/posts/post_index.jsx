import React from 'react';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        if (this.props.posts) {
            return (
                <div className='posts'>
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
                </div>
            )
        } else {
            return null
        }
       
    }
}

export default PostIndex;
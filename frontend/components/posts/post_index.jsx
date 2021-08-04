import React from 'react';

class PostIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='posts'>
                <ul>
                    {
                        this.props.posts.map(post => {
                            return (
                                <label>
                                    <li key={post.id}>
                                        {post.body}
                                    </li>
                                </label>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default PostIndex;
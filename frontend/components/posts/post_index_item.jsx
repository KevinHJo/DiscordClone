import React from 'react';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...this.props.post, editing: false };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updatePost = this.updatePost.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.toggleEditing = this.toggleEditing.bind(this);
    }

    toggleEditing(e) {
        e.preventDefault();
        this.setState({editing: true})
    }

    updatePost(e) {
        this.setState({body: e.target.value})
    }
    
    handleSubmit(e) {
        e.preventDefault();
        App.cable.subscriptions.subscriptions[0].update({post: this.state});
        this.setState({editing: false});
    }

    deletePost(e) {
        e.preventDefault();
    }

    render() {
        const { post } = this.props;
        if (this.state.editing) {
            return (
                <div className='post-item-edit'>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.body} onChange={this.updatePost}/>
                    </form>
                </div>
            )
        } else {
            return (    
                <div className='post-item'>
                    <div>{post.body}</div>
                    <div className='post-settings'>
                        <i className="fas fa-ellipsis-h"></i>
                        <ul className='post-settings-dropdown'>
                            <li className='edit-item' onClick={this.toggleEditing}>Edit message</li>
                            <li className='delete-item' onClick={this.deletePost}>Delete message</li>
                        </ul>
                    </div>
                </div>
            )
        }
    }
}

export default PostIndexItem;
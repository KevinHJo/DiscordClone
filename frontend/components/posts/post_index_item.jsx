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
        App.cable.subscriptions.subscriptions[0].update(this.state);
        this.setState({editing: false});
    }

    deletePost(e) {
        e.preventDefault();
        App.cable.subscriptions.subscriptions[0].delete({id: this.state.id});
    }

    render() {
        const { post } = this.props;
        if (this.state.editing) {
            return (
                <div className='post-item-edit'>
                    <div className='post-info'>
                        <span className='post-author'>{this.props.users[post.author_id].username}</span>
                        <span className='post-date'>{post.created_at}</span>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.body} onChange={this.updatePost}/>
                        <input type='submit'/>
                    </form>
                </div>
            )
        } else {
            return (    
                <div className='post-item'>
                    <div className='post-content'>
                        <div className='post-info'>
                            <span className='post-author'>{this.props.users[post.author_id].username}</span>
                            <span className='post-date'>{post.created_at}</span>
                        </div>
                        <span className='post-body'>{post.body}</span>
                    </div>

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
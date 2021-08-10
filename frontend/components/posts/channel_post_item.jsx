import React from 'react';
// import pfp from '../../../app/assets/images/pfp.png';

class ChannelPostItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {...this.props.post, editing: false, menuActive: false };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updatePost = this.updatePost.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.toggleEditing = this.toggleEditing.bind(this);
        this.toggleSelected = this.toggleSelected.bind(this);
        this.renderSettings = this.renderSettings.bind(this);
    }

    toggleSelected(e) {
        e.preventDefault();
        if (this.state.menuActive) {
            this.setState({menuActive: false})
        } else {
            this.setState({menuActive: true})
        }
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

    renderSettings() {
        if (this.state.menuActive) {
            return (
                <div className='active-post-settings'>
                    <i className="fas fa-ellipsis-h" onClick={this.toggleSelected}></i>
                    <ul className='post-settings-dropdown'>
                        <li className='edit-item' onClick={this.toggleEditing}>Edit message</li>
                        <li className='delete-item' onClick={this.deletePost}>Delete message</li>
                    </ul>
                </div>
            )
        } else {
            return (
                <div className='post-settings'>
                    <i className={"fas fa-ellipsis-h"} onClick={this.toggleSelected}></i>
                    <ul className='post-settings-dropdown'>
                        <li className='edit-item' onClick={this.toggleEditing}>Edit message</li>
                        <li className='delete-item' onClick={this.deletePost}>Delete message</li>
                    </ul>
                </div>
            )
        }
    }

    render() {
        const { post } = this.props;
        if (this.state.editing) {
            return (
                <li key={post.id} className='post-item-edit'>
                    <div className='post-content'>
                        <div className='post-profile-pic'>
                            <img src={'/images/pfp.png'} />
                        </div>
                        <div className='post-info'>
                            <div>
                                <span className='post-author'>{this.props.users[post.author_id].username}</span>
                                <span className='post-date'>{post.created_at}</span>
                            </div>
                            
                            <form className='post-edit-form' onSubmit={this.handleSubmit}>
                                <input type="text" value={this.state.body} onChange={this.updatePost}/>
                                <input type='submit'/>
                            </form>
                        </div>

                        
                    </div>
                </li>
            )
        } else {
            return (    
                <li key={post.id} className='post-item'>
                    <div className='post-content'>
                        <div className='post-profile-pic'>
                            <img src={'/images/pfp.png'} />
                        </div>
                        <div className='post-info'>
                            <div>
                                <span className='post-author'>{this.props.users[post.author_id].username}</span>
                                <span className='post-date'>{post.created_at}</span>
                            </div>
                            
                            <span className='post-body'>{post.body}</span>
                        </div>
                        
                    </div>

                    {this.renderSettings()}
                </li>
            )
        }
    }
}

export default ChannelPostItem;
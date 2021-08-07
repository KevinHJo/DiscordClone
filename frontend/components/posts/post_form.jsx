import React from 'react';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            channel_id: 1,
            author_id: this.props.currentUser.id,
            parent_id: 1
        }

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.createPost(this.state)
        App.cable.subscriptions.subscriptions[0].speak({post: this.state})
        this.setState({body: ''})
    }

    update(e) {
        this.setState({body: e.target.value})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='post-form'>
                <input type="text" value={this.state.body} placeholder={'Enter your message here'} onChange={this.update}/>
                <input type="submit" />
            </form>
        )
    }
}

export default PostForm;
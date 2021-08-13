import React from 'react';

class ChannelForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            server_id: this.props.server_id,
            private: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateName = this.updateName.bind(this);
        // this.updatePrivate = this.updatePrivate.bind(this);
        this.closeForm = this.closeForm.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createChannel(this.state);
    }

    updateName(e) {
        e.preventDefault;
        this.setState({name: e.target.value})
    }

    // updatePrivate(e) {
    //     e.preventDefault();
    //     this.setState()
    // }

    closeForm(e) {
        e.preventDefault();
        const channelForm = document.getElementsByClassName('channel-form-container')[0];
        channelForm.style.display = 'none'
    }

    render() {
        return (
            <div className='channel-form-container'>
                <div className='channel-form-content'>
                    <span className='channel-form-header'>
                        <div className='channel-form-title'>
                            <h2>Create text channel</h2>
                            <h3>in Text Channels</h3>
                        </div>
                        <div className='close-channel-form' onClick={this.closeForm}>
                            <i className="fas fa-times"></i>
                        </div>
                    </span>

                    <form onSubmit={this.handleSubmit}>
                        <h3>CHANNEL NAME</h3>
                        <div className='input-wrapper'>
                            <i className="fas fa-hashtag"></i>
                            <input type="text" value='' placeholder='new-channel' onChange={this.updateName}/>
                        </div>
                        
                        {/* <div className='private-checkbox'>
                            <div className='private-input-title'>
                                <i className="fas fa-lock"></i>
                                <h3>Private Channel</h3>
                            </div>
                            <input type="checkbox" checked={this.state.private} onChange={this.updatePrivate}/>
                        </div> */}

                        <div className='channel-form-footer'>
                            <button className='close-channel-form' onClick={this.closeForm}>Cancel</button>
                            <input type="submit" value='Create channel'/>
                        </div>
                        
                    </form>
                </div>
            </div>
        )
    }
}

export default ChannelForm;
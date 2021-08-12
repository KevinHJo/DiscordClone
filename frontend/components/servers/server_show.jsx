import React from 'react';

class ServerShow extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='server'>
                <div className='server-panel'>
                    <div className='server-header'>
                        {this.props.server.name}
                    </div>
                </div>
            </div>
        )
    }
}

export default ServerShow
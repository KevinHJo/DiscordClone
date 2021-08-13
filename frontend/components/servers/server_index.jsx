import React from 'react';
import { Link } from 'react-router-dom';

class ServerIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='server-list-container'>
                <div className='server-home'>
                    <img src={'/images/pfp.png'} />
                </div>
                <ul className='server-list'>
                    {this.props.userServers.map(server => {
                        return (
                            <li>
                                <Link to={`/channels/${server.id}/1`}><img src={'/images/pfp.png'}/></Link>
                                <div className='server-link-name'>{server.name}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
            
        )
    }
}

export default ServerIndex;